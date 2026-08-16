import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sidebar, PageId } from './components/Sidebar';
import { CounterPage } from './pages/CounterPage';
import { SettingsPage } from './pages/SettingsPage';
import { StatusPage } from './pages/StatusPage';
import './styles.css';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<PageId>('counter');

  function renderPage(): JSX.Element {
    switch (currentPage) {
      case 'counter':
        return <CounterPage />;
      case 'status':
        return <StatusPage />;
      case 'settings':
        return <SettingsPage />;
    }
  }

  return (
    <div className="app-shell">
      <Sidebar currentPage={currentPage} onSelect={setCurrentPage} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('React root element was not found.');
}

ReactDOM.render(<App />, root);
