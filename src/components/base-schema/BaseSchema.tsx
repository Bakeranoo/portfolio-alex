import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../shared/components/nav-bar/NavBar";
import './BaseSchema.css';
import Header from "../header/Header";

type BaseSchemaProps = {
    content: React.ReactNode;
}

const BaseSchema = ({ content }: BaseSchemaProps) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    return (
        <div className="base-schema">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                <div ref={headerRef}>
                    <Header />
                </div>
                <NavBar showLogo={!isHeaderVisible} fixed={!isHeaderVisible}/>
                <div>
                    {content ? content : <></>}
                </div>
                
            </div>
        </div>
    );
}

export default BaseSchema;