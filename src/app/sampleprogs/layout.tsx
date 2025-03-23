import Navbar from "@/app/sampleprogs/Navbar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>Sample Programs</h1>
            <Navbar/>
            {children}
        </div>
    );
}
