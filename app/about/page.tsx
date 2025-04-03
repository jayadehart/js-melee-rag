import Image from "next/image";
import graph from "../../public/images/graph.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center border border-black bg-gray-50 rounded-sm gap-8 p-8">
      <h1 className="text-4xl">About This Project</h1>

      <h3 className="text-2xl">Super Smash Brothers Melee</h3>
      <div>
        Super Smash Brothers Melee is a fighting game released in 2001 by
        Nintendo. Despite being over 20 years old, it still enjoys a healthy
        competitive scene and an active community. There are 26 playable
        characters, each with their own strengths and weaknesses. Try asking the
        chatbot some questions about character moves or attributes!
      </div>

      <h3 className="text-2xl">RAG (Retrieval Augmented Generation)</h3>
      <div>
        Retrieval Augmented Generation is a technique used to enhance large
        language models`&apos; ability to answer questions about a specific
        subject or set of reference materials. You use the user`&apos;s query to
        search your reference material, provide the search output to the LLM,
        and have it generate a response based on that context. One of the most
        common query tools is a Vector Embedded Database. To start, you divide
        your reference material into a set of chunks and store them with a
        vector array. From there, you can compare the vector coordinates of the
        query against your vector database. However, you can also use keyword
        searches, and you can even have LLMs generate SQL queries if you provide
        them the right tools.
      </div>

      <h3 className="text-2xl">Agentic Workflows</h3>
      <div>
        An AI `&apos;Agent`&apos; is distinguished from LLMs or simple AI
        pipelines by its ability to make decisions. LangGraph is a popular
        framework for creating AI agents. It provides a graph-based approach to
        agents. Each LangGraph agent can be represented as a set of nodes and
        edges. You can maintain state across nodes and use AI output to
        determine which edge the graph will execute next. Here is a visual
        representation of the retrieval agent I created.
      </div>

      <Image
        src={graph}
        alt="Mermaid diagram of a LangGraph agent"
        height={600}
        width={600}
      />
    </div>
  );
};

export default AboutPage;
