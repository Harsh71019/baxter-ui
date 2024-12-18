interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface NavItem {
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface NavbarProps {
  navItems: NavItem[];
  onNavItemClick?: (item: string) => void;
  onHelpClick?: () => void;
  onManualClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navItems,
  onNavItemClick,
  onHelpClick,
  onManualClick,
}) => {
  return (
    <nav>
      <div className="flex h-[40px] justify-center bg-[#003087]">
        <div className="flex">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className={`group relative ${index === 0 ? 'border-l border-[#6989b5]' : ''} `}
            >
              <button
                onClick={() => onNavItemClick?.(item.label)}
                className={`h-full border-r border-[#6989b5] px-4 text-[13px] font-normal transition-colors ${
                  item.isActive
                    ? 'bg-[#003087] text-white'
                    : 'bg-[#6989b5] text-white hover:bg-[#5a7aa3]'
                } flex items-center gap-1 whitespace-nowrap`}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {item.hasDropdown && item.dropdownItems && (
                <div className="absolute right-0 z-50 hidden w-48 border border-gray-200 bg-white shadow-lg group-hover:block">
                  <div className="py-1">
                    {item.dropdownItems.map(dropdownItem => (
                      <button
                        key={dropdownItem.label}
                        onClick={dropdownItem.onClick}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#e6f2f9]"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center border-l border-[#6989b5]">
          <button
            onClick={onManualClick}
            className="flex h-full items-center border-r border-[#6989b5] px-3 text-white hover:bg-[#004399]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </button>
          <button
            onClick={onHelpClick}
            className="flex h-full items-center gap-1 px-3 text-white hover:bg-[#004399]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Help
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
