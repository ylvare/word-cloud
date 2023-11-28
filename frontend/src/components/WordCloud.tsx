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

interface CloudWord {
  text: string;
  size: number;
}

interface LayoutWord extends Word {
  text: string;
  size: number;
  x: any;
  y: any;
  rotate: any;
}

const WordCloud: React.FC<WordCloudProps> = ({ rawData }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const cloudData: CloudWord[] = generateCloudData(rawData);

    const layout = cloud<CloudWord>()
      //.size([1000, 1000])
      .words(cloudData)
      .padding(1)
      //.rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .rotate(() => 0)
      .font("Impact")
      .fontSize((d) => d.size)
      // .random(() => 100) // Set a fixed seed value
      .on("end", draw);

    layout.start();

    function draw(words: LayoutWord[]) {
      const minX = d3.min(words, (d) => d.x);
      const minY = d3.min(words, (d) => d.y);
      const maxX = d3.max(words, (d) => d.x);
      const maxY = d3.max(words, (d) => d.y);

      //const svgWidth = maxX - minX + margin.left + margin.right;
      //const svgHeight = maxY - minY + margin.top + margin.bottom;

      const margin = 200;

      const svgWidth = maxX - minX + 2 * margin;
      const svgHeight = maxY - minY + 2 * margin;

      const svg = d3
        .select<SVGSVGElement, unknown>(svgRef.current!)
        .attr("width", svgWidth)
        .attr("height", svgHeight);
      console.log(words);
      //const svg = d3.select<SVGSVGElement, unknown>(svgRef.current!);

      // Purple fill color
      const fill = () => "purple";

      const text = svg.selectAll<SVGTextElement, CloudWord>("text").data(words);

      text
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) =>
            `translate(${d.x - minX + 100},${d.y - minY + 100})rotate(${
              d.rotate
            })`
        )
        .style("fill", fill)
        .text((d) => d.text);

      // text
      //   .transition()
      //   .duration(1000)
      //   .style("font-size", (d) => `${d.size}px`)
      //   .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
      //   .style("fill", fill);

      text.exit().remove();
    }
  }, [rawData]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WordCloud;
