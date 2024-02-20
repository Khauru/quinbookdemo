import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number; // customize typing speed
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typingSpeed = 150 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substr(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [displayedText, text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;