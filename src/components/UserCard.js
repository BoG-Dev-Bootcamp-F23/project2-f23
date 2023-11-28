import React, { useState, useEffect } from 'react';

export default function UserCard({ user }) {
    const admin = user.admin ? "Admin" : "User";

    return (
        <div>
            <div className = "icon">
                <p> {user.fullName[0]} </p>
            </div>
            <div className = "name">
                <p> {user.fullName} </p>
                <p> {admin}</p>
            </div>
        </div>
    );
}
