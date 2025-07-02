import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';
import './Team.css';
import { ThemeContext } from '../App';

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

  const singucore = [
    "https://i.pinimg.com/736x/67/74/11/677411be28eecf8cc553edebcfdc37c3.jpg",
    "https://i.pinimg.com/originals/d1/19/7e/d1197e58dd9b8740316f576061396d00.gif",
    "https://i.pinimg.com/originals/48/a2/69/48a2696280a0d19488e41ab600b71367.gif",
    "https://i.pinimg.com/originals/2b/df/4a/2bdf4a199d29c6a140edbf3500b63f75.gif",
    "https://i.pinimg.com/originals/de/a7/03/dea7038c9e5435898c1b0cb70fa5121e.gif",
    "https://i.pinimg.com/originals/8e/d4/fa/8ed4faa438469c93efd1ceaaf06304ac.gif",
    "https://i.pinimg.com/originals/0b/d6/26/0bd626c2398b14907af2840b66ec79a1.gif",
    "https://i.pinimg.com/originals/b7/1c/bb/b71cbbad9b5e81194b4a12c0921a827b.gif",
    "https://i.pinimg.com/originals/d7/1c/fe/d71cfe0dcd1644770c4d8c2f621e4972.gif",
    "https://i.pinimg.com/736x/81/b1/07/81b107fa37dd6ac53e2f71b6316f4b5d.jpg"
  ];

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const response = await fetch('/data/team.yml');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const yamlText = await response.text();
        
        const parseYAML = (text) => {
          const data = {
            current_year: 2024,
            current_team: {
              coordinators: [],
              secretaries: []
            }
          };
          
          const lines = text.split('\n');
          let currentSection = null;
          let currentRole = null;
          let currentMember = null;
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();
            const indentLevel = line.length - line.trimStart().length;
            
            if (trimmedLine.startsWith('current_year:')) {
              data.current_year = parseInt(trimmedLine.split(':')[1].trim());
            } else if (trimmedLine === 'current_team:') {
              currentSection = 'current_team';
              data.current_team = { coordinators: [], secretaries: [] };
            } else if (indentLevel === 2 && (trimmedLine === 'coordinators:' || trimmedLine === 'secretaries:')) {
              currentRole = trimmedLine.replace(':', '');
            } else if (indentLevel === 4 && trimmedLine.startsWith('- name:')) {
              currentMember = {};
              const nameMatch = trimmedLine.match(/name:\s*"([^"]+)"/);
              if (nameMatch) {
                currentMember.name = nameMatch[1];
              }
              
              for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j];
                const nextIndent = nextLine.length - nextLine.trimStart().length;
                
                if (nextIndent <= 4) break;
                
                const nextTrimmed = nextLine.trim();
                if (nextTrimmed.startsWith('photo:')) {
                  const photoMatch = nextTrimmed.match(/photo:\s*"([^"]+)"/);
                  if (photoMatch) currentMember.photo = photoMatch[1];
                } else if (nextTrimmed.startsWith('email:')) {
                  const emailMatch = nextTrimmed.match(/email:\s*"([^"]+)"/);
                  if (emailMatch) currentMember.email = emailMatch[1];
                } else if (nextTrimmed.startsWith('role:')) {
                  const roleMatch = nextTrimmed.match(/role:\s*"([^"]+)"/);
                  if (roleMatch) currentMember.role = roleMatch[1];
                }
              }
              
              if (currentMember.name && currentRole && currentSection === 'current_team') {
                data.current_team[currentRole].push(currentMember);
              }
            }
          }
          
          return data;
        };
        
        const parsedData = parseYAML(yamlText);
        setTeamData(parsedData);
      } catch (error) {
        setTeamData(null);
      } finally {
        setLoading(false);
      }
    };

    loadTeamData();
  }, []);

  const getCurrentTeam = () => {
    if (!teamData || !teamData.current_team) {
      return { coordinators: [], secretaries: [] };
    }
    return {
      coordinators: teamData.current_team.coordinators || [],
      secretaries: teamData.current_team.secretaries || []
    };
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, '_blank');
  };

  if (loading) {
    return <div className="team-page"><div className="container"><div className="loading">Loading team data...</div></div></div>;
  }

  const currentTeam = getCurrentTeam();

  return (
    <div className="team-page">
      <div className="container">
        <motion.div className="page-header" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">Meet the dedicated leaders and secretaries who make the Science Maths Society thrive.</p>
        </motion.div>
        
        <motion.div className="team-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="team-section">
            <div className="section-header"><Users size={24} /><h2>Leaders ({currentTeam.coordinators.length})</h2></div>
            <div className="team-grid">
              {currentTeam.coordinators.map((member, index) => (
                <motion.div key={member.name} className="team-member" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <div className="member-photo">
                    <img src={member.photo} alt={member.name} onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="photo-placeholder"><Users size={32} /></div>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <button className="email-btn" onClick={() => handleEmailClick(member.email)} title={`Email ${member.name}`}><Mail size={16} />{member.email}</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="team-section">
            <div className="section-header"><Users size={24} /><h2>Secretaries ({currentTeam.secretaries.length})</h2></div>
            <div className="team-grid">
              {currentTeam.secretaries.map((member, index) => {
                const isAnany = member.name === "Anany Rai";
                let cardStyle = {};
                if (isAnany && isDarkMode) {
                  const randomMedia = singucore[Math.floor(Math.random() * singucore.length)];
                  cardStyle = {
                    backgroundImage: `url(${randomMedia})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  };
                }
                return (
                  <motion.div
                    key={member.name}
                    className="team-member"
                    style={cardStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="member-photo">
                      <img src={member.photo} alt={member.name} onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                      <div className="photo-placeholder"><Users size={32} /></div>
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <button className="email-btn" onClick={() => handleEmailClick(member.email)} title={`Email ${member.name}`}><Mail size={16} />{member.email}</button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team; 