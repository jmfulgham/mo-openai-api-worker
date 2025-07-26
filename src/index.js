/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import openai from "openai";

const ai = new openai({apiKey: process.env.OPENAI_API_KEY})
export default {
	async fetch(request, env, ctx) {
		return new Response('Hello from my Open AI API Worker!');
	},
};
