export const PriorityIcon = (priority: string) => {
    const flagSVG = (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
      </svg>
    );
  
    const colorClass = (priority: string) => {
      switch (priority) {
        case 'blocker':
        case 'critical':
          return 'high';
        case 'high':
          return 'high';
        case 'medium':
          return 'medium';
        case 'low':
          return 'low';
        default:
          return '';
      }
    };
  
    return <span className={`priority-flag ${colorClass(priority)}`}>{flagSVG}</span>;
  };