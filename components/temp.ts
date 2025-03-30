const events = [
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "LangGraph",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "__start__",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "ChannelWrite<...>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "ChannelWrite<...>",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "ChannelWrite<__start__:agent>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "ChannelWrite<__start__:agent>",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "__start__",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "agent",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "RunnableSequence",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "prompt",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "prompt",
      data: {
        output: [
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "SystemMessage"],
            kwargs: {
              content:
                "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
              additional_kwargs: {},
              response_metadata: {},
            },
          },
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "HumanMessage"],
            kwargs: {
              content: "How many frames is shieks down b?",
              additional_kwargs: {},
              response_metadata: {},
              id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
            },
          },
        ],
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chat_model_start",
      name: "ChatOpenAI",
      data: {
        input: {
          messages: [
            [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "SystemMessage"],
                kwargs: {
                  content:
                    "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
                  additional_kwargs: {},
                  response_metadata: {},
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "HumanMessage"],
                kwargs: {
                  content: "How many frames is shieks down b?",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
                },
              },
            ],
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chat_model_end",
      name: "ChatOpenAI",
      data: {
        output: {
          lc: 1,
          type: "constructor",
          id: ["langchain_core", "messages", "AIMessageChunk"],
          kwargs: {
            content: "",
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  type: "function",
                  function: {
                    name: "vectorSearch",
                    arguments: '{"query":"Sheik down b frames"}',
                  },
                },
              ],
            },
            response_metadata: {
              usage: {
                prompt_tokens: 394,
                completion_tokens: 19,
                total_tokens: 413,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            tool_call_chunks: [
              {
                name: "vectorSearch",
                args: '{"query":"Sheik down b frames"}',
                id: "call_kbNM61NZibRNsOqPKD14SS2B",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
            usage_metadata: {
              input_tokens: 394,
              output_tokens: 19,
              total_tokens: 413,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
            tool_calls: [
              {
                name: "vectorSearch",
                args: {
                  query: "Sheik down b frames",
                },
                id: "call_kbNM61NZibRNsOqPKD14SS2B",
                type: "tool_call",
              },
            ],
            invalid_tool_calls: [],
          },
        },
        input: {
          messages: [
            [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "SystemMessage"],
                kwargs: {
                  content:
                    "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
                  additional_kwargs: {},
                  response_metadata: {},
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "HumanMessage"],
                kwargs: {
                  content: "How many frames is shieks down b?",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
                },
              },
            ],
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "RunnableSequence",
      data: {
        output: {
          lc: 1,
          type: "constructor",
          id: ["langchain_core", "messages", "AIMessageChunk"],
          kwargs: {
            content: "",
            additional_kwargs: {
              tool_calls: [
                {
                  index: 0,
                  id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  type: "function",
                  function: {
                    name: "vectorSearch",
                    arguments: '{"query":"Sheik down b frames"}',
                  },
                },
              ],
            },
            response_metadata: {
              usage: {
                prompt_tokens: 394,
                completion_tokens: 19,
                total_tokens: 413,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            tool_call_chunks: [
              {
                name: "vectorSearch",
                args: '{"query":"Sheik down b frames"}',
                id: "call_kbNM61NZibRNsOqPKD14SS2B",
                index: 0,
                type: "tool_call_chunk",
              },
            ],
            id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
            usage_metadata: {
              input_tokens: 394,
              output_tokens: 19,
              total_tokens: 413,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
            tool_calls: [
              {
                name: "vectorSearch",
                args: {
                  query: "Sheik down b frames",
                },
                id: "call_kbNM61NZibRNsOqPKD14SS2B",
                type: "tool_call",
              },
            ],
            invalid_tool_calls: [],
          },
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "ChannelWrite<...,agent>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "ChannelWrite<...,agent>",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "Branch<agent,continue,__end__>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "Branch<agent,continue,__end__>",
      data: {
        output: "continue",
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "agent",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_stream",
      name: "LangGraph",
      data: {
        chunk: {
          agent: {
            messages: [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "AIMessageChunk"],
                kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_kbNM61NZibRNsOqPKD14SS2B",
                        type: "function",
                        function: {
                          name: "vectorSearch",
                          arguments: '{"query":"Sheik down b frames"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 394,
                      completion_tokens: 19,
                      total_tokens: 413,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [
                    {
                      name: "vectorSearch",
                      args: '{"query":"Sheik down b frames"}',
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                  usage_metadata: {
                    input_tokens: 394,
                    output_tokens: 19,
                    total_tokens: 413,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [
                    {
                      name: "vectorSearch",
                      args: {
                        query: "Sheik down b frames",
                      },
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "tool_call",
                    },
                  ],
                  invalid_tool_calls: [],
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "tools",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_tool_start",
      name: "vectorSearch",
      data: {
        input: {
          input: '{"query":"Sheik down b frames"}',
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_retriever_start",
      name: "VectorStoreRetriever",
      data: {
        input: {
          query: "Sheik down b frames",
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_retriever_end",
      name: "VectorStoreRetriever",
      data: {
        output: [
          {
            pageContent:
              '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
            metadata: {
              move: "down_b",
              index: 16,
              source: "chardata/sheik.json",
              character: "sheik",
            },
          },
          {
            pageContent:
              '{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}',
            metadata: {
              move: "up_b",
              index: 14,
              source: "chardata/sheik.json",
              character: "sheik",
            },
          },
          {
            pageContent:
              '{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
            metadata: {
              move: "side_b",
              index: 15,
              source: "chardata/sheik.json",
              character: "sheik",
            },
          },
        ],
        input: {
          query: "Sheik down b frames",
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_tool_end",
      name: "vectorSearch",
      data: {
        output: {
          lc: 1,
          type: "constructor",
          id: ["langchain_core", "messages", "ToolMessage"],
          kwargs: {
            content:
              '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
            tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
            name: "vectorSearch",
            additional_kwargs: {},
            response_metadata: {},
          },
        },
        input: {
          input: '{"query":"Sheik down b frames"}',
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "ChannelWrite<...,tools>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "ChannelWrite<...,tools>",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "tools",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_stream",
      name: "LangGraph",
      data: {
        chunk: {
          tools: {
            messages: [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "ToolMessage"],
                kwargs: {
                  content:
                    '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                  tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  name: "vectorSearch",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "agent",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "RunnableSequence",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "prompt",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "prompt",
      data: {
        output: [
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "SystemMessage"],
            kwargs: {
              content:
                "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
              additional_kwargs: {},
              response_metadata: {},
            },
          },
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "HumanMessage"],
            kwargs: {
              content: "How many frames is shieks down b?",
              additional_kwargs: {},
              response_metadata: {},
              id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
            },
          },
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "AIMessageChunk"],
            kwargs: {
              content: "",
              additional_kwargs: {
                tool_calls: [
                  {
                    index: 0,
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "function",
                    function: {
                      name: "vectorSearch",
                      arguments: '{"query":"Sheik down b frames"}',
                    },
                  },
                ],
              },
              response_metadata: {
                usage: {
                  prompt_tokens: 394,
                  completion_tokens: 19,
                  total_tokens: 413,
                  prompt_tokens_details: {
                    cached_tokens: 0,
                    audio_tokens: 0,
                  },
                  completion_tokens_details: {
                    reasoning_tokens: 0,
                    audio_tokens: 0,
                    accepted_prediction_tokens: 0,
                    rejected_prediction_tokens: 0,
                  },
                },
              },
              tool_call_chunks: [
                {
                  name: "vectorSearch",
                  args: '{"query":"Sheik down b frames"}',
                  id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  index: 0,
                  type: "tool_call_chunk",
                },
              ],
              id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
              usage_metadata: {
                input_tokens: 394,
                output_tokens: 19,
                total_tokens: 413,
                input_token_details: {
                  audio: 0,
                  cache_read: 0,
                },
                output_token_details: {
                  audio: 0,
                  reasoning: 0,
                },
              },
              tool_calls: [
                {
                  name: "vectorSearch",
                  args: {
                    query: "Sheik down b frames",
                  },
                  id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  type: "tool_call",
                },
              ],
              invalid_tool_calls: [],
            },
          },
          {
            lc: 1,
            type: "constructor",
            id: ["langchain_core", "messages", "ToolMessage"],
            kwargs: {
              content:
                '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
              tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
              name: "vectorSearch",
              additional_kwargs: {},
              response_metadata: {},
              id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
            },
          },
        ],
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chat_model_start",
      name: "ChatOpenAI",
      data: {
        input: {
          messages: [
            [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "SystemMessage"],
                kwargs: {
                  content:
                    "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
                  additional_kwargs: {},
                  response_metadata: {},
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "HumanMessage"],
                kwargs: {
                  content: "How many frames is shieks down b?",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "AIMessageChunk"],
                kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_kbNM61NZibRNsOqPKD14SS2B",
                        type: "function",
                        function: {
                          name: "vectorSearch",
                          arguments: '{"query":"Sheik down b frames"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 394,
                      completion_tokens: 19,
                      total_tokens: 413,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [
                    {
                      name: "vectorSearch",
                      args: '{"query":"Sheik down b frames"}',
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                  usage_metadata: {
                    input_tokens: 394,
                    output_tokens: 19,
                    total_tokens: 413,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [
                    {
                      name: "vectorSearch",
                      args: {
                        query: "Sheik down b frames",
                      },
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "tool_call",
                    },
                  ],
                  invalid_tool_calls: [],
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "ToolMessage"],
                kwargs: {
                  content:
                    '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                  tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  name: "vectorSearch",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
                },
              },
            ],
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chat_model_end",
      name: "ChatOpenAI",
      data: {
        output: {
          lc: 1,
          type: "constructor",
          id: ["langchain_core", "messages", "AIMessageChunk"],
          kwargs: {
            content:
              "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 703,
                completion_tokens: 47,
                total_tokens: 750,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            tool_call_chunks: [],
            id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
            usage_metadata: {
              input_tokens: 703,
              output_tokens: 47,
              total_tokens: 750,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
            tool_calls: [],
            invalid_tool_calls: [],
          },
        },
        input: {
          messages: [
            [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "SystemMessage"],
                kwargs: {
                  content:
                    "You are a helpful agent with access to a variety of query tools to help answer questions related to Super Smash Brothers Melee. Use as many tools as you need until you have the requisite context to answer the provided question. Do not return an answer until you have tried every tool. Do not return an answer that does not directly reference a document you have queried.\n",
                  additional_kwargs: {},
                  response_metadata: {},
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "HumanMessage"],
                kwargs: {
                  content: "How many frames is shieks down b?",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "AIMessageChunk"],
                kwargs: {
                  content: "",
                  additional_kwargs: {
                    tool_calls: [
                      {
                        index: 0,
                        id: "call_kbNM61NZibRNsOqPKD14SS2B",
                        type: "function",
                        function: {
                          name: "vectorSearch",
                          arguments: '{"query":"Sheik down b frames"}',
                        },
                      },
                    ],
                  },
                  response_metadata: {
                    usage: {
                      prompt_tokens: 394,
                      completion_tokens: 19,
                      total_tokens: 413,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [
                    {
                      name: "vectorSearch",
                      args: '{"query":"Sheik down b frames"}',
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      index: 0,
                      type: "tool_call_chunk",
                    },
                  ],
                  id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                  usage_metadata: {
                    input_tokens: 394,
                    output_tokens: 19,
                    total_tokens: 413,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [
                    {
                      name: "vectorSearch",
                      args: {
                        query: "Sheik down b frames",
                      },
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "tool_call",
                    },
                  ],
                  invalid_tool_calls: [],
                },
              },
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "ToolMessage"],
                kwargs: {
                  content:
                    '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                  tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                  name: "vectorSearch",
                  additional_kwargs: {},
                  response_metadata: {},
                  id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
                },
              },
            ],
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "RunnableSequence",
      data: {
        output: {
          lc: 1,
          type: "constructor",
          id: ["langchain_core", "messages", "AIMessageChunk"],
          kwargs: {
            content:
              "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
            additional_kwargs: {},
            response_metadata: {
              usage: {
                prompt_tokens: 703,
                completion_tokens: 47,
                total_tokens: 750,
                prompt_tokens_details: {
                  cached_tokens: 0,
                  audio_tokens: 0,
                },
                completion_tokens_details: {
                  reasoning_tokens: 0,
                  audio_tokens: 0,
                  accepted_prediction_tokens: 0,
                  rejected_prediction_tokens: 0,
                },
              },
            },
            tool_call_chunks: [],
            id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
            usage_metadata: {
              input_tokens: 703,
              output_tokens: 47,
              total_tokens: 750,
              input_token_details: {
                audio: 0,
                cache_read: 0,
              },
              output_token_details: {
                audio: 0,
                reasoning: 0,
              },
            },
            tool_calls: [],
            invalid_tool_calls: [],
          },
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "ChannelWrite<...,agent>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "ChannelWrite<...,agent>",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_start",
      name: "Branch<agent,continue,__end__>",
      data: {
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "Branch<agent,continue,__end__>",
      data: {
        output: "__end__",
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "agent",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
        input: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
          ],
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_stream",
      name: "LangGraph",
      data: {
        chunk: {
          agent: {
            messages: [
              {
                lc: 1,
                type: "constructor",
                id: ["langchain_core", "messages", "AIMessageChunk"],
                kwargs: {
                  content:
                    "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                  additional_kwargs: {},
                  response_metadata: {
                    usage: {
                      prompt_tokens: 703,
                      completion_tokens: 47,
                      total_tokens: 750,
                      prompt_tokens_details: {
                        cached_tokens: 0,
                        audio_tokens: 0,
                      },
                      completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                      },
                    },
                  },
                  tool_call_chunks: [],
                  id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                  usage_metadata: {
                    input_tokens: 703,
                    output_tokens: 47,
                    total_tokens: 750,
                    input_token_details: {
                      audio: 0,
                      cache_read: 0,
                    },
                    output_token_details: {
                      audio: 0,
                      reasoning: 0,
                    },
                  },
                  tool_calls: [],
                  invalid_tool_calls: [],
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    type: "langchain_event",
    value: {
      event: "on_chain_end",
      name: "LangGraph",
      data: {
        output: {
          messages: [
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "HumanMessage"],
              kwargs: {
                content: "How many frames is shieks down b?",
                additional_kwargs: {},
                response_metadata: {},
                id: "3674d4fa-cf32-488b-8e70-234cedfd7aa1",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content: "",
                additional_kwargs: {
                  tool_calls: [
                    {
                      index: 0,
                      id: "call_kbNM61NZibRNsOqPKD14SS2B",
                      type: "function",
                      function: {
                        name: "vectorSearch",
                        arguments: '{"query":"Sheik down b frames"}',
                      },
                    },
                  ],
                },
                response_metadata: {
                  usage: {
                    prompt_tokens: 394,
                    completion_tokens: 19,
                    total_tokens: 413,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [
                  {
                    name: "vectorSearch",
                    args: '{"query":"Sheik down b frames"}',
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    index: 0,
                    type: "tool_call_chunk",
                  },
                ],
                id: "chatcmpl-BGZRrgEV2fE5y8OwIzyYM0ib9dpBe",
                usage_metadata: {
                  input_tokens: 394,
                  output_tokens: 19,
                  total_tokens: 413,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [
                  {
                    name: "vectorSearch",
                    args: {
                      query: "Sheik down b frames",
                    },
                    id: "call_kbNM61NZibRNsOqPKD14SS2B",
                    type: "tool_call",
                  },
                ],
                invalid_tool_calls: [],
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "ToolMessage"],
              kwargs: {
                content:
                  '{"char":"sheik","move":"down_b","start":27,"end":36,"total":62,"iasa":"","ld_fl_spec":"","stun":"","percent":0,"percent_weak":null,"notes":"invulnerable frames 27-36, becomes zelda on frame 37","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}\n\n{"char":"sheik","move":"up_b","start":36,"end":42,"total":94,"iasa":"","ld_fl_spec":4,"stun":"","percent":12,"percent_weak":null,"notes":"invulnerable frames 18-55. choose direction at frame 35","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":30,"cancel_lag":15}\n\n{"char":"sheik","move":"side_b","start":22,"end":65,"total":75,"iasa":"","ld_fl_spec":"","stun":"","percent":5,"percent_weak":3,"notes":"comes out frame 22, fully extended frame 34, can retract as early as frame 44, pull hitbox frames 19-31 with 10 frames endlag","auto_cancel_s":-1,"auto_cancel_e":-1,"land_lag":null,"cancel_lag":-1}',
                tool_call_id: "call_kbNM61NZibRNsOqPKD14SS2B",
                name: "vectorSearch",
                additional_kwargs: {},
                response_metadata: {},
                id: "8cee65df-6d79-4e30-8a5d-bcd0ad636fd4",
              },
            },
            {
              lc: 1,
              type: "constructor",
              id: ["langchain_core", "messages", "AIMessageChunk"],
              kwargs: {
                content:
                  "Sheik's down B move has a total of 62 frames. It starts on frame 27 and ends on frame 36, during which she is invulnerable. After frame 36, she transforms into Zelda.",
                additional_kwargs: {},
                response_metadata: {
                  usage: {
                    prompt_tokens: 703,
                    completion_tokens: 47,
                    total_tokens: 750,
                    prompt_tokens_details: {
                      cached_tokens: 0,
                      audio_tokens: 0,
                    },
                    completion_tokens_details: {
                      reasoning_tokens: 0,
                      audio_tokens: 0,
                      accepted_prediction_tokens: 0,
                      rejected_prediction_tokens: 0,
                    },
                  },
                },
                tool_call_chunks: [],
                id: "chatcmpl-BGZRt9mJTZVkXlBgOztx9QEqMmSzo",
                usage_metadata: {
                  input_tokens: 703,
                  output_tokens: 47,
                  total_tokens: 750,
                  input_token_details: {
                    audio: 0,
                    cache_read: 0,
                  },
                  output_token_details: {
                    audio: 0,
                    reasoning: 0,
                  },
                },
                tool_calls: [],
                invalid_tool_calls: [],
              },
            },
          ],
        },
      },
    },
  },
];
