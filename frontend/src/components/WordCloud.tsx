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

      const padding = 20;
      const viewBoxWidth = maxX - minX + 2 * padding;
      const viewBoxHeight = maxY - minY + 2 * padding;

      const svg = d3
        .select<SVGSVGElement, unknown>(svgRef.current!)
        .attr("width", "100%") // Use 100% width for responsiveness
        .attr("height", "100%") // Use 100% height for responsiveness
        .attr(
          "viewBox",
          `${minX - padding} ${minY - padding} ${viewBoxWidth} ${viewBoxHeight}`
        );

      console.log(words);
      console.log("SVG Dimensions:", viewBoxWidth, "x", viewBoxHeight);
      console.log("SVG Element:", svg.node());

      const fill = () => "purple";

      svg
        .selectAll<SVGTextElement, CloudWordInput>("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .style("fill", fill)
        .transition()
        .duration(700)
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
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
