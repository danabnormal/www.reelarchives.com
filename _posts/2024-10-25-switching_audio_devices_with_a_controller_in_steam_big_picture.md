---
layout: post
title:  "Switching Audio Devices With A Controller In Steam Big Picture"
---

While using services for playing games remotely (such as Steam Remote Play, Sunshine and Moonlight, etc) the hosts audio is piped through a virtual device which streams game audio to the client.

After finishing the session the hosts audio device SHOULD switch back to your default hardware but this doesn't always occur. This is especially troublesome if you run your host keyboard and mouseless working solely through Steam Big Picture. Similarly sometimes the audio device isn't switched when starting a streaming session, resulting in no audio on the client.

This guide walks you through setting up options within Steam allowing you to switch audio devices on your host using just a controller in Big Picture mode (and therefore also when accessing the system remotely).


## TLDR
* Install the PowerShell package `AudioDeviceCmdlets` with the command `Install-Module -Name AudioDeviceCmdlets` in an administrator PowerShell window.
* Use the command `Get-AudioDevice -list | Format-Table` to find the names of the appropriate audio devices.
* Create a PowerShell script containing the command `(Get-AudioDevice -list | Where-Object Name -like ("YOURDEVICENAMEHERE") | Set-AudioDevice)` where `YOURDEVICENAMEHERE` is the name of the device you want to switch to.
* Add a non-Steam game to your library pointing to `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` and set the `Launch Options` to the location of your PowerShell script.

## NOTES
This relies on Powershell scripts for executing the commands needed to switch audio devices.

To allow these scripts to run you will need to change your ExecutionPolicy level using something like:

    Set-ExecutionPolicy -scope CurrentUser unrestricted

It is up to you to decide what security level you are happy with when it comes to the execution of PowerShell scripts.

Remember - for the sake of these instructions any mention of `streaming` refers to the playing of games remotely (using Steam Remote Play or similar) from a host machine to another machine (such as a Steam Deck), not the broadcast of gameplay to a streaming site such as Twitch.

If you know what you're doing you'll be able to make this cleaner (a single script that switches between two devices, embedding the command itself in the Steam game negating the need for scripts etc) but this should just do for most people.

## INSTRUCTIONS
All the following should be done on your 'host' machine (the one that you stream games from, not to).

### Getting PowerShell ready
This uses a PowerShell module called AudioDeviceCmdlets (https://github.com/frgnca/AudioDeviceCmdlets).

To install:

* Click the Start button, and type `powershell`.
* With the Windows PowerShell result highlighted, click `Run as Administrator` on the right.

* Type the following command and press `enter`:

        Install-Module -Name AudioDeviceCmdlets

* When asked if you would like to install the package, type `Y` and press `enter`.
* When asked if you would like to trust the repository, type `Y` and press `enter`.

### Checking your audio devices
* In the same window enter the command and press `enter`. This will return a list of all the audio devices on your machine.

        Get-AudioDevice -list | Format-Table

* There are two devices you need to make a note of - your main audio device and the Steam Streaming audio device. In my case my main device is named `SONY TV` and my streaming device is `Speakers (Steam Streaming Speakers)`.

### Create the scripts
We now need to create two scripts - one which directs audio to your hosts default audio device, and one for streaming. You can also download the files here, just remember you'll still need to set the device names.

* Open Notepad (or any text editor) and type the following:

        (Get-AudioDevice -list | Where-Object Name -like ("YOURDEVICENAMEHERE") | Set-AudioDevice).Name

* Replace `YOURDEVICENAMEHERE` with the name of your hosts main audio device. In my case the command would be:

        (Get-AudioDevice -list | Where-Object Name -like ("SONY TV") | Set-AudioDevice).Name

* Save the file to a sensible location as a PS1 file - I chose the file name `AudioToLivingRoom.ps1`.

* In a new empty file, enter the following:

        (Get-AudioDevice -list | Where-Object Name -like ("YOURSTREAMINGDEVICENAMEHERE") | Set-AudioDevice).Name

* Remember to replace `YOURSTREAMINGDEVICENAMEHERE` with the name of the device your machine uses to send audio to the client. In my case the command is:

        (Get-AudioDevice -list | Where-Object Name -like ("Speakers (Steam Streaming Speakers)") | Set-AudioDevice).Name

* Save this somewhere appropriate as a PS1 file - I used the name `AudioToStreaming.ps1`.

Test the scripts from the PowerShell window. You can see which audio device Windows is using by hovering over the Speaker icon next to the clock. If the device isn't changing as expected, double check that the device names you used in the scripts.

### Set up Steam
* Launch Steam and make sure you're in the normal desktop mode (not Big Picture).
* Within the Steam client, click `Add a Game` (bottom left of the window) and choose `Add a Non-Steam Game...`.
* Click `Browse...`.
* In the filename box type the following and press enter:

        C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
* With powershell ticked in the Steam window click `Add Selected Programs`.
* Click in to the Library tab in Steam and search for `powershell`.
* Right-click the 'game' and choose `Properties`.
* Change the title from `powershell` to something appropriate (such as `Audio to Living Room`)
* In Launch Options, give the full path to the PowerShell script you saved earlier. In my case this was:

        D:\Scripts\AutioToLivingRoom.ps1
* Close the window and your changes will be saved.

* Back in your Steam Library, find the game we just added and launch it. Your audio device should switch.

Repeat the above to create another entry for your other script (to direct audio to your streaming device).

## AND YOUR DONE!
You now have two 'games' in Steam which you can use to switch audio devices if you ever get stuck, accessible with a controller from within Big Picture.