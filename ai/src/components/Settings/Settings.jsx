import React, { useState } from 'react';
import './Settings.css';
import { Link } from 'react-router';




const Settings = () => {
  const [profileData, setProfileData] = useState({
    displayName: 'John Doe',
    email: 'john@example.com'
  });

  const [toggleStates, setToggleStates] = useState({
    profileVisibility: true,
    animations: true,
    pushNotifications: true,
    emailNotifications: false,
    notificationSound: true,
    twoFactorAuth: false,
    dataCollection: true,
    loginAlerts: true,
    backgroundSync: true,
    developerMode: false,
    betaFeatures: false,
    debugLogging: false
  });

  const [dropdownValues, setDropdownValues] = useState({
    theme: 'Dark',
    fontSize: 'Medium',
    cacheSize: 'Medium (200MB)'
  });

  const [autoSaveFreq, setAutoSaveFreq] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = (toggleName) => {
    setToggleStates(prev => ({
      ...prev,
      [toggleName]: !prev[toggleName]
    }));
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDropdownChange = (field, value) => {
    setDropdownValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success feedback
    const saveBtn = document.querySelector('.btn-primary');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = 'Saved!';
    saveBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
      saveBtn.textContent = originalText;
      saveBtn.style.background = 'linear-gradient(135deg, #8a2be2, #9370db)';
      setIsLoading(false);
    }, 1500);
  };

  const handleResetSettings = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setToggleStates({
        profileVisibility: false,
        animations: false,
        pushNotifications: false,
        emailNotifications: false,
        notificationSound: false,
        twoFactorAuth: false,
        dataCollection: false,
        loginAlerts: false,
        backgroundSync: false,
        developerMode: false,
        betaFeatures: false,
        debugLogging: false
      });
      
      setDropdownValues({
        theme: 'Dark',
        fontSize: 'Small',
        cacheSize: 'Small (50MB)'
      });
      
      setProfileData({
        displayName: '',
        email: ''
      });
      
      setAutoSaveFreq(1);
      
      alert('Settings have been reset to default values.');
    }
  };

  const ToggleSwitch = ({ isActive, onToggle, disabled = false }) => (
    <div 
      className={`toggle-switch ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={!disabled ? onToggle : undefined}
    >
      <div className="toggle-slider"></div>
    </div>
  );

  const SettingItem = ({ label, description, children }) => (
    <div className="setting-item">
      <div className="setting-label">
        <h4>{label}</h4>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );

  const SettingsCard = ({ title, icon, children }) => (
    <div className="settings-card">
      <h3>{icon} {title}</h3>
      {children}
    </div>
  );

  return (
    <div className="settings-page">
      <div className="background-elements"></div>
      
      <nav className="settings-nav">
      <Link className="nav-logo" to="/Aihl" style={{ textDecoration: 'none'}}>Veritas AI</Link>
        <button className="nav-back" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
      </nav>

      <div className="settings-container">
        <div className="settings-header">
          <h1>Account Settings</h1>
          <p>Customize your experience and manage your preferences</p>
        </div>

        <div className="settings-grid">
          {/* Profile Settings */}
          <SettingsCard title="Profile Settings" icon="">
            <SettingItem 
              label="Display Name" 
              description="How others see your name"
            >
              <input 
                type="text" 
                className="input-field" 
                placeholder="Enter your name"
                value={profileData.displayName}
                onChange={(e) => handleInputChange('displayName', e.target.value)}
              />
            </SettingItem>
            
            <SettingItem 
              label="Email Address" 
              description="Your primary contact email"
            >
              <input 
                type="email" 
                className="input-field" 
                placeholder="your@email.com"
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </SettingItem>
            
            <SettingItem 
              label="Profile Visibility" 
              description="Make your profile visible to others"
            >
              <ToggleSwitch 
                isActive={toggleStates.profileVisibility}
                onToggle={() => handleToggle('profileVisibility')}
              />
            </SettingItem>
          </SettingsCard>

          {/* Appearance Settings */}
          <SettingsCard title="Appearance" icon="">
            <SettingItem 
              label="Theme" 
              description="Choose your preferred theme"
            >
              <select 
                className="dropdown-select"
                value={dropdownValues.theme}
                onChange={(e) => handleDropdownChange('theme', e.target.value)}
              >
                <option>Dark</option>
                <option>Light</option>
                <option>Auto</option>
              </select>
            </SettingItem>
            
            <SettingItem 
              label="Font Size" 
              description="Adjust text size for better readability"
            >
              <select 
                className="dropdown-select"
                value={dropdownValues.fontSize}
                onChange={(e) => handleDropdownChange('fontSize', e.target.value)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </SettingItem>
            
            <SettingItem 
              label="Animations" 
              description="Enable smooth animations and transitions"
            >
              <ToggleSwitch 
                isActive={toggleStates.animations}
                onToggle={() => handleToggle('animations')}
              />
            </SettingItem>
          </SettingsCard>

          {/* Notification Settings */}
          <SettingsCard title="Notifications" icon="">
            <SettingItem 
              label="Push Notifications" 
              description="Receive notifications on your device"
            >
              <ToggleSwitch 
                isActive={toggleStates.pushNotifications}
                onToggle={() => handleToggle('pushNotifications')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Email Notifications" 
              description="Get updates via email"
            >
              <ToggleSwitch 
                isActive={toggleStates.emailNotifications}
                onToggle={() => handleToggle('emailNotifications')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Notification Sound" 
              description="Play sound for notifications"
            >
              <ToggleSwitch 
                isActive={toggleStates.notificationSound}
                onToggle={() => handleToggle('notificationSound')}
              />
            </SettingItem>
          </SettingsCard>

          {/* Privacy & Security */}
          <SettingsCard title="Privacy & Security" icon="">
            <SettingItem 
              label="Two-Factor Authentication" 
              description="Add extra security to your account"
            >
              <ToggleSwitch 
                isActive={toggleStates.twoFactorAuth}
                onToggle={() => handleToggle('twoFactorAuth')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Data Collection" 
              description="Allow analytics for better experience"
            >
              <ToggleSwitch 
                isActive={toggleStates.dataCollection}
                onToggle={() => handleToggle('dataCollection')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Login Alerts" 
              description="Get notified of new login attempts"
            >
              <ToggleSwitch 
                isActive={toggleStates.loginAlerts}
                onToggle={() => handleToggle('loginAlerts')}
              />
            </SettingItem>
          </SettingsCard>

          {/* Performance Settings */}
          <SettingsCard title="Performance" icon="">
            <SettingItem 
              label="Auto-Save Frequency" 
              description="How often to save your work automatically"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="range" 
                  className="range-slider" 
                  min="1" 
                  max="10" 
                  value={autoSaveFreq}
                  onChange={(e) => setAutoSaveFreq(e.target.value)}
                />
                <span style={{ color: '#8a2be2', fontWeight: '600', minWidth: '50px' }}>
                  {autoSaveFreq} min
                </span>
              </div>
            </SettingItem>
            
            <SettingItem 
              label="Cache Size" 
              description="Amount of data to store locally"
            >
              <select 
                className="dropdown-select"
                value={dropdownValues.cacheSize}
                onChange={(e) => handleDropdownChange('cacheSize', e.target.value)}
              >
                <option>Small (50MB)</option>
                <option>Medium (200MB)</option>
                <option>Large (500MB)</option>
              </select>
            </SettingItem>
            
            <SettingItem 
              label="Background Sync" 
              description="Sync data when app is not active"
            >
              <ToggleSwitch 
                isActive={toggleStates.backgroundSync}
                onToggle={() => handleToggle('backgroundSync')}
              />
            </SettingItem>
          </SettingsCard>

          {/* Advanced Settings */}
          <SettingsCard title="Advanced" icon="">
            <SettingItem 
              label="Developer Mode" 
              description="Enable advanced developer features"
            >
              <ToggleSwitch 
                isActive={toggleStates.developerMode}
                onToggle={() => handleToggle('developerMode')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Beta Features" 
              description="Try experimental features early"
            >
              <ToggleSwitch 
                isActive={toggleStates.betaFeatures}
                onToggle={() => handleToggle('betaFeatures')}
              />
            </SettingItem>
            
            <SettingItem 
              label="Debug Logging" 
              description="Enable detailed error logs"
            >
              <ToggleSwitch 
                isActive={toggleStates.debugLogging}
                onToggle={() => handleToggle('debugLogging')}
              />
            </SettingItem>
          </SettingsCard>
        </div>

        <div className="action-buttons">
          <button 
            className="btn btn-primary" 
            onClick={handleSaveSettings}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleResetSettings}
            disabled={isLoading}
          >
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;