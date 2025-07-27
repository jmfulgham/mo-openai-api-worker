import OpenAI from "openai";

export default {
	async fetch(request, env, ctx) {
		const corsHeaders = { "Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "content-type"
	};
		//Handle CORS Preflight
		if(request.method === "OPTIONS") {
			return new Response(null, {headers: corsHeaders})
		}

		const openAi = new OpenAI({apiKey: env.OPENAI_API_KEY})
		const messages = await request.json();
		try {
			const chatCompletion = await openAi.chat.completions.create({
				model: "gpt-4.1-nano-2025-04-14",
				temperature: 1.1,
				messages,
			})
			return new Response(JSON.stringify(chatCompletion.choices[0].message), {headers: corsHeaders} );
		}	catch (e) {
			console.error("OpenAI Error ", e)
			return new Response(e, {headers: corsHeaders} )
		}
	},
};
