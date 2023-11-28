// components/WordCloud.tsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud, { Word } from "d3-cloud";
import { generateCloudData } from "../utils/cloudData";
import "../styles/tailwind.css";

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
      .size([500, 300])
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

      const padding = 40;
      const viewBoxWidth = maxX - minX + 2 * padding;
      const viewBoxHeight = maxY - minY + 2 * padding;

      const svg = d3
        .select<SVGSVGElement, unknown>(svgRef.current!)
        .attr("width", "100%")
        .attr("height", "100%")
        .attr(
          "viewBox",
          `${minX - padding} ${minY - padding} ${viewBoxWidth} ${viewBoxHeight}`
        );

      console.log(words);
      console.log("SVG Dimensions:", viewBoxWidth, "x", viewBoxHeight);
      console.log("SVG Element:", svg.node());

      const fill = () => "rgb(236 72 153)";

      svg
        .selectAll<SVGTextElement, CloudWordInput>("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", "0px")
        .style("fill", fill)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => {
          const initialX = d.x + Math.random() * 200 - 100;
          const initialY = d.y + Math.random() * 200 - 100;
          return `translate(${initialX},${initialY})`;
        })
        .transition()
        .duration(700)
        .delay((d, i) => i * 30)
        .attr("transform", (d) => `translate(${d.x},${d.y})`)
        .text((d) => d.text)
        .attr("class", "opacity-0")
        .style("font-size", (d) => `${d.size}px`)
        .attr("class", "opacity-100");
    }
    return () => {
      // Perform cleanup tasks here
      // This function will be called when the component unmounts or when the dependencies change
    };
  }, [rawData]);

  return <svg ref={svgRef}></svg>;
};

export default WordCloud;
