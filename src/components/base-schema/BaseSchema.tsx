import React from "react";
import NavBar from "../../shared/components/nav-bar/NavBar";
import Sidebar from "../../shared/components/sidebar/Sidebar";
import './BaseSchema.css';

type BaseSchemaProps = {
    content: React.ReactNode;
}

const BaseSchema = ({ content }: BaseSchemaProps) => {
    return (
        <div className="base-schema">
            <div style={{ display: 'flex', height: '100vh', alignItems: 'center', marginLeft: '40px' }}>
                <Sidebar />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
                <NavBar />
                { content ? content : <></> }
            </div>
        </div>
    );
}

export default BaseSchema;