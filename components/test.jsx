"use client"
import React, { useRef, useEffect, useState } from 'react';

function CenteredOnView() {
  const parentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting is true when the element is in view
        setIsInView(entry.isIntersecting);
      },
      {
        // Adjust threshold if you want more or less of the element in view before triggering
        threshold: 0.1,
      }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  return (
    <div ref={parentRef} className="min-h-screen bg-gray-100 border border-gray-300">
      <p className="p-4">
        Scroll down (or resize) so that this container comes into view. 
        Once the <code>parentRef</code> is intersecting, the centered box will appear.
      </p>

      {/* Show the centered overlay only when the parent container is in view */}
      {isInView && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-blue-500 text-white p-6 rounded shadow-lg">
            I am centered in the viewport because the parent is in view!
          </div>
        </div>
      )}
    </div>
  );
}

export default CenteredOnView;
