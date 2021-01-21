import React from 'react';
import './App.scss';

interface ISettings {
  mode: 0 | 1;
}

const App: React.FunctionComponent = () => {
  const [settings, setSettings] = React.useState<ISettings>({
    mode: 0
  });

  const changeTheme = (newMode: (0 | 1) = settings.mode): void => {
    setSettings({
      mode: newMode === 0 ? 1 : 0
    });
  }

  return (
    <div className="App">
      <div className={`mode mode--${settings.mode}`}>
        <button onClick={() => changeTheme()}>{settings.mode}</button>
        <span>Hi, mode {settings.mode}</span>
      </div>
    </div>
  );
}

export default App;