import '../app/mainLayout.css';

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="mainGrid">
                <main>{children}</main>
            </body>
        </html>
    )
}