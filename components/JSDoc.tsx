import React from "react";
import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";
import atomOneLight from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light";
SyntaxHighlighter.registerLanguage("ts", ts);

export function JSDoc(props: { jsdoc: string; short?: boolean }) {
  const firstline = props.jsdoc.split("\n")[0];
  return (
    <ReactMarkdown
      source={props.short ? firstline : props.jsdoc}
      renderers={{
        link: (props: any) => (
          <a className="text-blue-400" {...props}>
            {props.children}
          </a>
        ),
        inlineCode: (props: { children: string }) => (
          <code className="font-mono bg-gray-200 p-px rounded-sm">
            {props.children}
          </code>
        ),
        code: CodeBlock,
        table: (props) => (
          <div className="overflow-y-scroll w-full">
            <table
              {...props}
              className="border-collapse border border-gray-300 my-2"
            />
          </div>
        ),
        tableCell: (props) => (
          <td
            {...props}
            className={
              "border border-gray-300 px-2 py-1" +
              (props.isHeader ? " font-medium" : "")
            }
          />
        ),
      }}
    />
  );
}

export function CodeBlock(props: { value: string }) {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={atomOneLight}
      customStyle={{
        fontSize: "0.75rem",
        padding: "0.5rem 0.75rem",
        margin: "0.5rem 0",
        borderRadius: "0.25rem",
      }}
    >
      {props.value}
    </SyntaxHighlighter>
  );
}