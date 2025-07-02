import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, HelpCircle } from 'lucide-react';
import './Resources.css';

const Resources = () => {
  const resourceCategories = [
    {
      id: 'lectures',
      title: 'Handouts/Notes',
      icon: <FileText size={24} />,
      description: 'Comprehensive  notes and handouts for various topics',
      resources: [
        {
          name: 'Integration and Summation ~ Edward Jin',
          type: 'PDF',
          size: '229 KB',
          file: '/resources/Integration_and_Summation.pdf'
        }
      ]
    },
    {
      id: 'books',
      title: 'Reference Books',
      icon: <BookOpen size={24} />,
      description: 'Essential textbooks and reference materials',
      resources: [
        {
          name: 'How to READ and DO proofs.',
          author: 'Daniel Solow',
          type: 'PDF',
          size: '4.4 MB',
          file: '/resources/Solow,_Daniel_How_to_read_and_do_proofs_an_introduction_to_mathematical.pdf'
        }
      ]
    },
    {
      id: 'questionsets',
      title: 'Question Sets',
      icon: <HelpCircle size={24} />,
      description: 'Practice problems and question sets for competitive exams',
      resources: [
        {
          name: 'Blue Victoria 50 Combinatorics Problems',
          type: 'PDF',
          size: '767 KB',
          file: '/resources/Blue_Victoria_50_Combinatorics_Problems.pdf'
        }
      ]
    }
  ];

  const handleDownload = (resource) => {
    if (resource.file === '#') {
      // Placeholder function for items not yet available
      console.log('Download placeholder:', resource.name);
      return;
    }
    
    // Create download link for actual files
    const link = document.createElement('a');
    link.href = resource.file;
    link.download = resource.name;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resources-page">
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">
            Access our comprehensive collection of study materials, lecture notes, 
            and reference books for mathematics and science.
          </p>
        </motion.div>

        <div className="resources-content">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.section 
              key={category.id}
              className="resource-category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <div className="category-info">
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="resource-items">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div 
                    key={resource.name}
                    className={`resource-item ${resource.file === '#' ? 'placeholder-item' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (resourceIndex * 0.05) }}
                  >
                    <div className="resource-icon">
                      <Download size={20} />
                    </div>
                    
                    <div className="resource-content">
                      <h3>{resource.name}</h3>
                      {resource.author && (
                        <p className="resource-author">by {resource.author}</p>
                      )}
                      <div className="resource-meta">
                        <span className="resource-type">{resource.type}</span>
                        <span className="resource-size">{resource.size}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="resource-download"
                      onClick={() => handleDownload(resource)}
                      title={`Download ${resource.name}`}
                      disabled={resource.file === '#'}
                    >
                      <Download size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 