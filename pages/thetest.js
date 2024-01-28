import React, { useEffect, useRef } from 'react';

const Test = () => {
  const mobileLayoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the mobile-layout element is in the viewport
      const rect = mobileLayoutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInViewport = rect.top >= 0 && rect.bottom <= windowHeight;

      if (isInViewport) {
        // Apply animation classes when mobile-layout is in the viewport
        mobileLayoutRef.current.classList.add('animate');
      } else {
        // Remove animation classes when mobile-layout is out of the viewport
        mobileLayoutRef.current.classList.remove('animate');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="info">
        Mobile - Try tapping
      </div>
      <div className="mobile-layout" ref={mobileLayoutRef}>
        <div className="notification-header">
          <div className="time">9:41</div>
          <div className="necessities">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-full"></i>
          </div>
        </div>
        <div className="actions">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-bookmark"></i>
        </div>  
        <div className="book-cover">
          <img className="book-top" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg" alt="book-top" />
          <img className="book-side" src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" /> 
        </div>
        <div className="preface">
          <div className="content">
            <div className="header">
              <div className="title">The Diary of a Young Girl</div>
              <div className="icon">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div className="author">by Anne Frank</div>
            <div className="body">
              <p>also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands</p>
              <p>Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
