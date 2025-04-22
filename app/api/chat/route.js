import axios from "axios";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    console.log("messages", messages);

    // 🧠 Customize this section with YOUR info
    const systemMessage = {
      role: 'system',
      content: `
You are a friendly and professional assistant representing Nadish Umair, a freelance full-stack web developer.

Here is your context:
- Name: Nadish Umair
- Location: Lahore, Pakistan
- Email: nadishumair@gmail.com


Nadish specializes in:
- Frontend development (React, Next.js, Tailwind CSS)
- Backend development (Node.js, Express, MongoDB)
- UI/UX design and prototyping (Figma)
- Performance optimization & SEO
- Building fast, responsive websites for startups and businesses

Typical turnaround time is 1–2 weeks for most projects.

Always respond like a helpful assistant on Nadish’s behalf. Be friendly, concise, and informative.
`
    };

    // 🧹 Clean up messages to remove any blanks
    const filteredMessages = messages.filter(
      (msg) => msg.content && msg.content.trim().length > 0
    );

    // 📤 Send chat request to OpenRouter
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [systemMessage, ...filteredMessages],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = response.data;
    console.log("response data", data);

    const reply = data.choices?.[0]?.message?.content || "I'm not sure how to respond.";

    return Response.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error.response?.data || error.message);
    return new Response(
      JSON.stringify({ reply: 'Something went wrong.' }),
      { status: 500 }
    );
  }
}
