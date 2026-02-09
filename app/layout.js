import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata = {
title: 'BeeTeam',
description: 'Top-tier video production company',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body><CustomCursor />{children}</body>
</html>
)
}