class Windows10 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows 10"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win10"
    }), React.createElement(AutomaticLogin, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win10"
    }), React.createElement(WindowsFeatures, {
      version: "win10"
    }), React.createElement(StartupPrograms, {
      version: "win10"
    }), React.createElement(Services, {
      version: "win10"
    }), React.createElement(TaskScheduler, {
      version: "win10"
    }), React.createElement(DiskCleanup, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win10"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win10"
    }), React.createElement(WindowsFirewall, {
      version: "win10"
    }), React.createElement(SharedFolders, {
      version: "win10"
    }), React.createElement(CrowdInspect, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win10"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win10"
    }), React.createElement(AuditPolicy, {
      version: "win10"
    }), React.createElement(UserRightsAssignment, {
      version: "win10"
    }), React.createElement(SecurityOptions, {
      version: "win10"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win10"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win10"
    }), React.createElement(WindowsDefender, {
      version: "win10"
    }), React.createElement(AntiMalwareTools, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win10"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win10"
    }), React.createElement(UsersFolder, {
      version: "win10"
    }), React.createElement(ProgramFiles, {
      version: "win10"
    }), React.createElement(ProgramFilesx86, {
      version: "win10"
    }), React.createElement(HostsFile, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win10"
    }), React.createElement(AutomaticUpdates, {
      version: "win10"
    }), React.createElement(WindowsUpdate, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win10"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win10"
    }), React.createElement(CDrive, {
      version: "win10"
    }), React.createElement(CommandPrompt, {
      version: "win10"
    }), React.createElement(ControlPanel, {
      version: "win10"
    }), React.createElement(Processes, {
      version: "win10"
    }), React.createElement(TaskManager, {
      version: "win10"
    }), React.createElement(WindowsSettings, {
      version: "win10"
    })));
  }

}

ReactDOM.render(React.createElement(Windows10, null), document.getElementById("app"));