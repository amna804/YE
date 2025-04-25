export default function CenteredHeading({
    mainText,
    subText,
    highlightText,
    highlightColor = "text-blue-400"
  }) {
    return (
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {mainText} 
          {highlightText && (
            <span className={`${highlightColor} ml-2`}>{highlightText}</span>
          )}
        </h2>
        {subText && (
          <p className="text-xl md:text-2xl text-gray-400">{subText}</p>
        )}
      </div>
    )
  }