'use client'
/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";

import SalesCard, { SalesProps } from "@/components/SalesCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity,
    link :"https://www.linkedin.com/in/taksh-kaushik/"
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
    link:"https://www.linkedin.com/in/taksh-kaushik/"    
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
    link:"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
    link:"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
    link:"https://www.linkedin.com/in/taksh-kaushik/"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
    link:"https://www.linkedin.com/in/taksh-kaushik/"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full transition-all max-w-xl ml-9">
      <Carousel 
      plugins={[Autoplay({delay:2000})]}
      className="w-full flex-grow w-3/4">
      <CarouselContent className="-ml-1">
    {cardData.map((d, i) => (
      <CarouselItem key={i} className="pl-1 md:basis-100 lg:basis-1/6">
      <div className="p-1">     
         <Card  
                   key={i}
                   amount={d.amount}
                   discription={d.discription}
                     icon={d.icon}
                   label={d.label}
                   link ="https://www.linkedin.com/in/taksh-kaushik/"/>
      </div>
    </CarouselItem> 
        ))}   
       </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </section>
      <section  className="grid grid-cols-1 gap-4 transition-all md:basis-100  lg:grid-cols">
      <CardContent >
      <section >
            <p className="text-3xl font-bold  p-2">Recent Sales</p>
            </section>   
            <section  className= "grid grid-cols-1 gap-4 transition-all md:grid-cols-3  lg:grid-cols-3">      
      {uesrSalesData.map((d, i) => (
        <SalesCard
          key={i}
          email={d.email}
          name={d.name}
          saleAmount={d.saleAmount}
          link="https://www.linkedin.com/in/taksh-kaushik/"
        />
      ))}
      </section>
        </CardContent>
        {/*  */}
      </section>
    </div>
  );
}

