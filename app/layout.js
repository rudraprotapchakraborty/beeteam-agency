import './globals.css'


export const metadata = {
title: 'BeeTeam',
description: 'Top-tier video production company',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body>{children}</body>
</html>
)
}