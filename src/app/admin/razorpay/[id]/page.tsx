"use client";
import React, { useEffect, useState } from "react";

function FetchRazorpayPaymentData({ params }: { params: { id: string } }) {
    const { id } = params;
    const [paymentData, setPaymentData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/razorpay/${id}`);
                const data = await res.json();
                setPaymentData(data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();

        // Cleanup function if necessary
        return () => {
            // Any cleanup code can go here
        };
    }, [id]);
    return (
        <div>
            <h1>Fetch Razorpay Payment Data</h1>
            <pre>{paymentData ? JSON.stringify(paymentData, null, 2) : 'Loading...'}</pre>
        </div>
    );
}

export default FetchRazorpayPaymentData;
