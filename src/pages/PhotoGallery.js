import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ArrowLeft, X } from 'lucide-react';
import GlitchText from '../components/GlitchText';
import { ThemeContext } from '../App';
import './PhotoGallery.css';


const albums = [
    {
        id: 'inter-iit-14',
        title: "Inter IIT Tech Meet 14.0",
        cover: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.13 PM.jpeg",
        images: [
            { id: 1, src: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.13 PM.jpeg", caption: "Inter IIT Tech Meet 14.0" },
            //{ id: 2, src: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.13 PM (1).jpeg", caption: "Inter IIT Tech Meet 14.0" },
            { id: 3, src: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.13 PM (2).jpeg", caption: "Inter IIT Tech Meet 14.0" },
            { id: 4, src: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.53 PM.jpeg", caption: "Post Medal Celebrations with the bootcamp attendees" },
            //{ id: 5, src: "/Inter IIT techmeet 14.0/WhatsApp Image 2026-02-02 at 9.42.53 PM (1).jpeg", caption: "Inter IIT Tech Meet 14.0" },
        ]
    },
    {
        id: 'intro-session',
        title: "Intro Session",
        cover: "/Intro Session/IMG-20260129-WA0009.jpg",
        images: [
            { id: 1, src: "/Intro Session/IMG-20260129-WA0009.jpg", caption: "Intro Session Highlight" },
            { id: 2, src: "/Intro Session/IMG-20260129-WA0010.jpg", caption: "Audience Interaction" },
            { id: 3, src: "/Intro Session/IMG-20260129-WA0011.jpg", caption: "Presentation" },
            { id: 4, src: "/Intro Session/IMG-20260129-WA0012.jpg", caption: "Community" },
        ]
    },
    {
        id: 'escape-room',
        title: "Escape Room",
        cover: "/Escape Room/IMG-20260129-WA0006.jpg",
        images: [
            { id: 1, src: "/Escape Room/IMG-20250817-WA0015.jpg", caption: "" },
            { id: 2, src: "/Escape Room/IMG-20260129-WA0005.jpg", caption: "" },
            { id: 3, src: "/Escape Room/IMG-20260129-WA0006.jpg", caption: "" },
            { id: 4, src: "/Escape Room/IMG-20260129-WA0007.jpg", caption: "" },
            { id: 5, src: "/Escape Room/IMG-20260129-WA0008.jpg", caption: "" },
        ]
    },
    {
        id: 'kpb',
        title: "Kyu Padhe Bhai with Prof.Amit Kuber",
        cover: "/KPB/IMG-20260129-WA0022.jpg",
        images: [
            { id: 3, src: "/KPB/IMG-20260129-WA0020.jpg", caption: "KPB Session" },
            { id: 2, src: "/KPB/IMG-20260129-WA0021.jpg", caption: "Discussion" },
            { id: 1, src: "/KPB/IMG-20260129-WA0022.jpg", caption: "Group Photo" },
            { id: 4, src: "/KPB/IMG-20260129-WA0024.jpg", caption: "Discussion" },
        ]
    },
    {
        id: 'pavillion',
        title: "Pavillion",
        cover: "/Pavillion/IMG-20250725-WA0008.jpg",
        images: [
            { id: 1, src: "/Pavillion/IMG-20250725-WA0008.jpg", caption: "SnT Pavillion" },
            { id: 2, src: "/Pavillion/WA_1769709567628.jpeg", caption: "SnT Pavillion" },
        ]
    },
    {
        id: 'winter-projects',
        title: "Winter Projects",
        cover: "/Winter Projects/IMG-20260129-WA0000.jpg",
        images: [
            { id: 1, src: "/Winter Projects/IMG-20260129-WA0000.jpg", caption: "" },
            { id: 2, src: "/Winter Projects/IMG-20260201-WA0010.jpg", caption: "" },
            { id: 3, src: "/Winter Projects/IMG-20260201-WA0013.jpg", caption: "" },
            { id: 4, src: "/Winter Projects/IMG-20260201-WA0014.jpg", caption: "" },
            { id: 5, src: "/Winter Projects/winter-3.jpeg", caption: "" },
        ]
    },
];

const PhotoGallery = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const formatMode = isDarkMode ? 'dark-mode' : 'light-mode';

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className={`gallery-page ${formatMode}`}>
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">
                        <GlitchText delay={500}>
                            {selectedAlbum ? selectedAlbum.title : "Photo Gallery"}
                        </GlitchText>
                    </h1>
                    <p className="page-subtitle">
                        {selectedAlbum
                            ? <button onClick={() => setSelectedAlbum(null)} className="back-link">
                                <ArrowLeft size={16} /> Back to Albums
                            </button>
                            : "Explore our events and memories captured in frames."
                        }
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!selectedAlbum ? (
                        <motion.div
                            className="albums-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="albums-list"
                        >
                            {albums.map((album, index) => (
                                <motion.div
                                    key={album.id}
                                    className="album-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedAlbum(album)}
                                >
                                    <div className="album-cover">
                                        <img src={album.cover} alt={album.title} />
                                        <div className="album-overlay">
                                            <Folder size={48} className="album-icon" />
                                        </div>
                                    </div>
                                    <div className="album-info">
                                        <h3>{album.title}</h3>
                                        <p>{album.images.length} Photos</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="gallery-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key="photos-list"
                        >
                            {selectedAlbum.images.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    className="gallery-item"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedImage(photo)}
                                >
                                    <img src={photo.src} alt={photo.caption} className="gallery-image" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-caption">{photo.caption}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>


                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fullscreen-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="close-button" onClick={() => setSelectedImage(null)}>
                                <X size={32} />
                            </button>
                            <motion.img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="fullscreen-image"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                            {selectedImage.caption && (
                                <p className="fullscreen-caption">{selectedImage.caption}</p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PhotoGallery;
