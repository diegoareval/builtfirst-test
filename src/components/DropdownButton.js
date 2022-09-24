import useOnClickOutside from "../hooks/useClickOutside";

const DropdownButton = ({
  isActive,
  onClose,
  onOpen,
  customContent = null,
  children,
  className = "",
  classNameArrow,
}) => {
  const { ref } = useOnClickOutside({ callBack: () => onClose() });

  return (
    <div className="relative" ref={ref}>
      <div className="relative cursor-pointer" onClick={() => onOpen()}>
        {children}
      </div>

      {isActive && (
        <>
          <div
            className={`absolute bg-white top-12 right-0 p-7 shadow-lg rounded-[20px] z-2 border border-gray-200 ${className}`}
          >
            {customContent ? (
              <div className="min-w-[60px]">{customContent}</div>
            ) : (
              <div>Your content...</div>
            )}
          </div>
          <div
            className={`bg-white w-4 h-4 absolute top-10 rotate-45 right-[53px] border-t border-l border-gray-200 z-1 ${classNameArrow}`}
          />
        </>
      )}
    </div>
  );
};

export default DropdownButton;
