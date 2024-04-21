"use client";

import * as React from "react";
import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {legalInfo} from "../../../data/legal_Info"
export default function Terms() {
   
    return (
        <Container className="mx-auto">
            <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32 text-white">
                <h1 className={cn("text-5xl", tiaraFont)}>Terms & Conditions</h1>
                {legalInfo.terms.map((terms, index) => (
                    <div key={index}>
                        <h1 className={cn("text-2xl", tiaraFont)}>{terms.title}</h1>
                        <p>{terms.description}</p>
                    </div>
               ))}
            </div>
        </Container>
    );
}
