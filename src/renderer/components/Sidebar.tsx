import * as React from 'react';

export type PageId = 'counter' | 'status' | 'settings';

type SidebarProps = {
  currentPage: PageId;
  onSelect: (page: PageId) => void;
};

const menuItems: Array<{ id: PageId; label: string }> = [
  { id: 'counter', label: 'カウンター' },
  { id: 'status', label: 'ステータス' },
  { id: 'settings', label: '設定' }
];

export function Sidebar({ currentPage, onSelect }: SidebarProps): JSX.Element {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Practice App</div>
      <nav className="sidebar-menu" aria-label="メインメニュー">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-button ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onSelect(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
