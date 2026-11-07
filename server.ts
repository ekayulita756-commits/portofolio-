import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini Client safely
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// System knowledge about Eka Yulita
const SYSTEM_PROMPT = `You are the polite, cheerful, and professional AI Assistant for Eka Yulita's Personal Portfolio.
Profile Details:
- Name: Eka Yulita
- Role: Information Systems Student (Mahasiswa Semester 1)
- University: Universitas Komputama (UNIKMA) - S1 Sistem Informasi (Semester 1)
- Previous Education: MA Muhammadiyah Majenang (Jurusan MIPA / IPA berwawasan teknologi komputasi)
- Motto: "Go with the flow, but don't forget your goal."
- Tagline: "Learning Today, Creating Tomorrow."
- Core Skills: Microsoft Word, Microsoft Excel, Google Sheets, Canva, Basic Programming (Logic & HTML/CSS basics), Digital Creativity & Design.
- Contact Details:
  * Email: ekayulita756@gmail.com
  * WhatsApp: +62 888-0911-6923
- Personality: Friendly, humble, enthusiastic about learning technology and system design, polite (menggunakan bahasa Indonesia yang sopan dan ramah atau English depending on the question language).
- Rules: Never fabricate false achievements or false work experiences. Answer clearly and help visitors connect with Eka. Keep responses concise (under 3-4 sentences).`;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // If Gemini API is available, generate response
  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-flash-latest',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nVisitor asks: "${message}"\n\nAssistant reply:`
              }
            ]
          }
        ],
        config: {
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      });

      const reply = response.text || "Halo! Terima kasih atas pertanyaannya. Eka Yulita adalah mahasiswa Sistem Informasi semester 1 di Universitas Komputama (UNIKMA). Silakan hubungi langsung via WhatsApp atau Email ya!";
      return res.json({ reply });
    } catch (error) {
      console.error('Error generating AI response:', error);
    }
  }

  // Intelligent local fallback if API key is not yet set or during static preview
  const lower = message.toLowerCase();
  let fallbackReply = "Halo! Terima kasih telah berkunjung ke portofolio Eka Yulita. Eka adalah mahasiswa Semester 1 Sistem Informasi di Universitas Komputama (UNIKMA) dengan minat di bidang teknologi, manajemen data, dan desain digital.";

  if (lower.includes('kontak') || lower.includes('contact') || lower.includes('hubungi') || lower.includes('wa') || lower.includes('email')) {
    fallbackReply = "Kamu bisa langsung menghubungi Eka melalui WhatsApp di +62 888-0911-6923 atau email di ekayulita756@gmail.com. Tombol kontak langsung juga tersedia di bagian bawah portofolio ini!";
  } else if (lower.includes('skill') || lower.includes('kemampuan') || lower.includes('bisa apa')) {
    fallbackReply = "Kemampuan utama Eka mencakup Microsoft Word, Microsoft Excel, Google Sheets, Canva, Basic Programming, dan Kreativitas Digital.";
  } else if (lower.includes('kuliah') || lower.includes('kampus') || lower.includes('jurusan') || lower.includes('prodi')) {
    fallbackReply = "Eka sedang menempuh pendidikan S1 Sistem Informasi di Universitas Komputama (UNIKMA), saat ini berada di Semester 1.";
  } else if (lower.includes('proyek') || lower.includes('project') || lower.includes('karya')) {
    fallbackReply = "Eka memiliki eksplorasi proyek seperti Desain Konsep Portal Mahasiswa UNIKMA, Template Analisis Data Excel/Sheets, dan desain presentasi kreatif di Canva. Kamu bisa melihat detailnya di bagian Projects!";
  }

  return res.json({ reply: fallbackReply });
});

// Setup development vite middleware or production static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
