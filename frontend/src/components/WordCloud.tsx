// components/WordCloud.tsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud, { Word } from "d3-cloud";
import { generateCloudData } from "../utils/cloudData";

interface RawWordData {
  word: string;
  frequency: number;
}

interface WordCloudProps {
  rawData: RawWordData[];
}

interface CloudWordInput {
  text: string;
  size: number;
}

interface CloudWord extends Word {
  text: string;
  size: number;
  x: any;
  y: any;
  rotate: any;
}

const WordCloud: React.FC<WordCloudProps> = ({ rawData }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const cloudData: CloudWordInput[] = generateCloudData(rawData);

    const layout = cloud<CloudWordInput>()
      .words(cloudData)
      .padding(1)
      .rotate(() => 0)
      .font("Impact")
      .fontSize((d) => d.size)
      .on("end", draw);

    layout.start();

    function draw(words: CloudWord[]) {
      const minX = d3.min(words, (d) => d.x);
      const minY = d3.min(words, (d) => d.y);
      const maxX = d3.max(words, (d) => d.x);
      const maxY = d3.max(words, (d) => d.y);

      const svgWidth = maxX - minX + 30;
      const svgHeight = maxY - minY + 30;

      const svg = d3
        .select<SVGSVGElement, unknown>(svgRef.current!)
        .attr("width", svgWidth)
        .attr("height", svgHeight);
      console.log(words);

      console.log("SVG Dimensions:", svgWidth, "x", svgHeight);
      console.log("SVG Element:", svg.node());

      const fill = () => "purple";

      const text = svg
        .selectAll<SVGTextElement, CloudWordInput>("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .style("fill", fill)
        .attr(
          "transform",
          (d) =>
            `translate(${svgWidth / 2},${svgHeight / 2})rotate(${d.rotate})`
        )
        .transition()
        .duration(700);
      text
        .attr(
          "transform",
          (d) =>
            `translate(${d.x - minX + 20},${d.y - minY + 20})rotate(${
              d.rotate
            })`
        )
        .text((d) => d.text);
    }
    return () => {
      // Perform cleanup tasks here
      // This function will be called when the component unmounts or when the dependencies change
    };
  }, [rawData]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WordCloud;
