"use client";

import * as React from "react";
import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {legalInfo} from "../../../data/privacyPolicy"
export default function Privacy() {
    interface Privacy { 
        title: string;
        content : string;
    }
    return (
        <Container className="mx-auto">
            <div className="py-4 mx-6  sm:mx-12 space-y-4 pt-32">
                <h1 className={cn("text-5xl", tiaraFont)}>Privacy Policy</h1>
                <p>
                    At Tiara, we take your privacy seriously and are committed to protecting your personal information. This
                    privacy policy explains how we collect, use, and safeguard your data. By registering for our festival
                    competition, you agree to the terms of this privacy policy.
                </p>
                {legalInfo.policy.map((policy, index) => (
                    <div key={index}>
                        <h1 className={cn("text-2xl", tiaraFont)}>{policy.title}</h1>
                        <p>{policy.content}</p>
                    </div>
               ))}
            </div>
        </Container>
    );
}
