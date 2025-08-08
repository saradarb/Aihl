import React, { useState, useEffect } from 'react';
import './Help.css';
import { Link } from 'react-router';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "To reset your password, click on the \"Forgot Password\" link on the login page. Enter your email address and follow the instructions sent to your email. You'll receive a secure link to create a new password."
    },
    {
      id: 2,
      question: "How do I update my billing information?",
      answer: "Go to Settings > Billing in your account dashboard. From there, you can update your payment method, billing address, and view your payment history. Changes take effect immediately."
    },
    {
      id: 3,
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged for the next cycle."
    },
    {
      id: 4,
      question: "How do I invite team members?",
      answer: "Navigate to Team Management in your dashboard and click \"Invite Members.\" Enter their email addresses and select their permission levels. They'll receive an invitation email to join your workspace."
    },
    {
      id: 5,
      question: "What browsers are supported?",
      answer: "Our platform works best on modern browsers including Chrome 90+, Firefox 85+, Safari 14+, and Edge 90+. We recommend keeping your browser updated for the best experience."
    },
    {
      id: 6,
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is backed up daily and stored in secure, geographically distributed data centers."
    }
  ];

  const helpCategories = [
    {
      icon: "",
      title: "Frequently Asked Questions",
      description: "Quick answers to the most common questions about our platform and services.",
      link: "#faq",
      action: () => scrollToSection('faq')
    },
    {
      icon: "",
      title: "Contact Support",
      description: "Get personalized help from our support team via chat, email, or phone.",
      link: "#contact",
      action: () => scrollToSection('contact')
    },
    {
      icon: "",
      title: "User Guides",
      description: "Step-by-step tutorials and comprehensive guides to help you get the most out of our platform.",
      link: "#",
      action: () => console.log('Navigate to guides')
    },
    {
      icon: "",
      title: "Video Tutorials",
      description: "Watch our collection of video tutorials covering all features and functionality.",
      link: "#",
      action: () => console.log('Navigate to videos')
    },
    {
      icon: "",
      title: "Getting Started",
      description: "New to our platform? Start here for a complete onboarding experience.",
      link: "#",
      action: () => console.log('Navigate to getting started')
    },
    {
      icon: "",
      title: "Troubleshooting",
      description: "Solve common technical issues and learn how to fix problems quickly.",
      link: "#",
      action: () => console.log('Navigate to troubleshooting')
    }
  ];

  const contactOptions = [
    {
      icon: "",
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: () => console.log('Open live chat')
    },
    {
      icon: "",
      title: "Email Support",
      description: "Send us a detailed message",
      action: () => window.open('mailto:support@example.com')
    },
    {
      icon: "",
      title: "Phone Support",
      description: "Call us Monday-Friday 9AM-6PM EST",
      action: () => window.open('tel:+1234567890')
    },
    {
      icon: "",
      title: "Submit Ticket",
      description: "Create a support ticket for complex issues",
      action: () => console.log('Open ticket system')
    }
  ];

  const quickLinks = [
    { icon: "", title: "Account Security", action: () => console.log('Navigate to security') },
    { icon: "", title: "Billing & Payments", action: () => console.log('Navigate to billing') },
    { icon: "", title: "API Documentation", action: () => console.log('Navigate to API docs') },
    { icon: "", title: "Analytics Guide", action: () => console.log('Navigate to analytics') }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleFAQ = (faqId) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim()) {
      scrollToSection('faq');
    }
  };

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll('.help-card, .faq-item, .contact-option');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const HelpCard = ({ icon, title, description, action }) => (
    <div className="help-card" onClick={action}>
      <span className="help-card-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="help-card-link">
        {title === "Frequently Asked Questions" || title === "Contact Support" 
          ? `Browse ${title.split(' ')[0]} →` 
          : "Learn More →"
        }
      </span>
    </div>
  );

  const FAQItem = ({ faq, isActive, onToggle }) => (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <button className="faq-question" onClick={onToggle}>
        {faq.question}
        <span className="faq-icon">▼</span>
      </button>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );

  const ContactOption = ({ icon, title, description, action }) => (
    <div className="contact-option" onClick={action}>
      <span className="contact-option-icon">{icon}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );

  const QuickLink = ({ icon, title, action }) => (
    <div className="quick-link" onClick={action}>
      <span className="quick-link-icon">{icon}</span>
      {title}
    </div>
  );

  return (
    <div className="help-page">
      <div className="background-elements"></div>
      
      <nav className="help-nav">
      <Link className="nav-logo" to="/Aihl" style={{ textDecoration: 'none'}}>Veritas AI</Link>
        <button className="nav-back" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
      </nav>

      <div className="help-container">
        <div className="help-header">
          <h1>How can we help you?</h1>
          <p>Find answers to common questions, browse our guides, or get in touch with our support team</p>
          <input 
            type="text" 
            className="search-box" 
            placeholder="Search for help articles, guides, or FAQ..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && searchTerm.trim()) {
                scrollToSection('faq');
              }
            }}
          />
        </div>

        <div className="help-sections">
          {(searchTerm ? filteredCategories : helpCategories).map((category, index) => (
            <HelpCard 
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              action={category.action}
            />
          ))}
        </div>

        <div className="faq-section" id="faq">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions</p>
          </div>

          <div className="faq-container">
            {(searchTerm ? filteredFAQs : faqData).map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isActive={activeFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
            {searchTerm && filteredFAQs.length === 0 && (
              <div className="faq-item">
                <div className="faq-question" style={{ cursor: 'default', justifyContent: 'center' }}>
                  No results found for "{searchTerm}"
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="contact-section" id="contact">
          <h2>Still need help?</h2>
          <p>Our support team is here to help you with any questions or issues you might have</p>
          
          <div className="status-indicator">
            <span className="status-dot"></span>
            All systems operational
          </div>

          <div className="contact-options">
            {contactOptions.map((option, index) => (
              <ContactOption
                key={index}
                icon={option.icon}
                title={option.title}
                description={option.description}
                action={option.action}
              />
            ))}
          </div>
        </div>

        <div className="additional-help">
          <div className="help-card">
            <span className="help-card-icon"></span>
            <h3>Quick Links</h3>
            <p>Access the most commonly needed resources and tools</p>
            <div className="quick-links" style={{ marginTop: '1rem' }}>
              {quickLinks.map((link, index) => (
                <QuickLink
                  key={index}
                  icon={link.icon}
                  title={link.title}
                  action={link.action}
                />
              ))}
            </div>
          </div>

          <div className="help-card">
            <span className="help-card-icon"></span>
            <h3>Feature Requests</h3>
            <p>Have an idea for a new feature? We'd love to hear from you!</p>
            <span className="help-card-link">Submit Request →</span>
          </div>

          <div className="help-card">
            <span className="help-card-icon"></span>
            <h3>Report a Bug</h3>
            <p>Found something that's not working right? Let us know so we can fix it.</p>
            <span className="help-card-link">Report Bug →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;