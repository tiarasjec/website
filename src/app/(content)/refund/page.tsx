"use client";

import * as React from "react";
import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {legalInfo} from "../../../data/legal_Info"
export default function Refund() {
   
    return (
        <Container className="mx-auto">
            <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32 text-white">
                <h1 className={cn("text-5xl", tiaraFont)}>Refund Policy</h1>
                {legalInfo.Refund.map((refund, index) => (
                    <div key={index}>
                        <h1 className={cn("text-2xl", tiaraFont)}>{refund.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: refund.description }}></p>
                    </div>
               ))}
            </div>
        </Container>
    );
}
