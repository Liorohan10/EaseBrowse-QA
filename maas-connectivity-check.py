from langchain_openai import ChatOpenAI
import os
import httpx
client = httpx.Client(verify=False)
llm = ChatOpenAI(
   base_url="https://genailab.tcs.in", # set openai_api_base to the LiteLLMProxy
   model = "genailab-maas-gpt-5.4",
   api_key="sk-KOdE-I18LkLfx6SU2mSJbQ",
   http_client = client
)

print(llm.invoke("Hi"))