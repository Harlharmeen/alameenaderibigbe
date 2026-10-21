import type {Metadata} from 'next';
import './globals.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
export const metadata:Metadata={title:'Al-ameen Aderibigbe — Brand Identity & Product Designer',description:'Portfolio of Al-ameen Aderibigbe, a Brand Identity & Product Designer.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<Footer/></body></html>}
