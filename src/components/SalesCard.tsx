/* eslint-disable @next/next/no-img-element */
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";
import  { CardContent } from "@/components/Card";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
  link :"https://www.linkedin.com/in/taksh-kaushik/"
};

export default function SalesCard(props: SalesProps) {
  return (
    
    <CardContent  className=" flex justify-between gap-2 hover:shadow-[0px_4px_12px_rgba(36,47,78,0.12)] transition-shadow duration-200">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.name}</p>
        {/* icon */}
        <img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`} alt="avatar" />
      </section>
      <section className="flex flex-row gap-1">
        <h2 className="text-2xl font-semibold">{props.email}</h2>
        <p className="text-xs text-gray-500">{props.saleAmount}</p>
      </section>
      </a>
    </CardContent>
    
  );
}
