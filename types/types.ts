// helpers interfaces //
export type Entries<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T][]

// home => Grahpic interfaces //
export interface IGrahpicResponse {
    status: boolean
    data: IGraficItems[]
    msg: string
    error: any
    explain: string
}

export interface IGraficItems {
    '0': number[]
    out: number
    in: number
    speedout: number
    speedin: number
}

// home => HomeInfo interfaces //
export interface IHomeInfoResponse {
    status: boolean
    data: IHomeInfoItems
    msg: string
    error: any
    explain: string
}

export interface IHomeInfoItems {
    connection: string
    vulner: number
    incident: number
    tasks: ITaskItem[]
    incidents: IIncidentsItem[]
    localNetwork: ILocalNetwork
}

export interface IIncidentsItem {
    id: number
    type: number
    priority: number
    createTst: number
}

export interface ITaskItem {
    id: number
    type: number
    crt: number
    titleVars: { softName: string }
    createTst: number
}

export interface ILocalNetwork {
    ap: IApLocalNetwork[]
    devices: IDevicesLocalNetwork
    ports: IPortLocalNetwork[]
}

export interface IApLocalNetwork {
    name: string
    channel: number
    range: number
}

export interface IDevicesLocalNetwork {
    cable: ICableDevices
    wifi: IWifiDevices
}

export interface ICableDevices {
    count: number
    new: number
}

export interface IWifiDevices {
    count: number
    new: number
}

export interface IPortLocalNetwork {
    duplex: boolean
    port: number
    auto: boolean
    link: boolean
    speed: number
    txflow: boolean
    rxflow: boolean
    type: string
}

// home => ToggleWifi interfaces //
export interface IToggleWiFiResponse {
    status: boolean
    data: IToggleWiFiItem[]
    msg: string
    error: null
    explain: string
}

export interface IToggleWifiItems {
    
}

export interface IToggleWiFiItem {
    name: string
    channel: string
    enabled: boolean
    range: number
}

export interface ISetToggleWifiResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

export interface ISetToggleWifiRequest {
    range: number
    started: boolean
}

// home => SpeedTest interfaces //
export interface ISpeedTestResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

// home => SpeedNet interfaces //
export interface ISpeedNetResponse {
    status: boolean
    data: ISpeedNetItem
    msg: string
    error: null
    explain: string
}

export interface ISpeedNetItem {
    ping: string
    download: string
    upload: string
}

// users => Users interfaces //
export interface IUsersResponse {
    status: boolean
    data: IUserItem[]
    msg: string
    error: null
    explain: string
}

export interface IUserItem {
    id: number
    login: string
    role: string
}

// users => UserLog interfaces //
export interface IUserLogResponse {
    status: boolean
    data: IUserLogItem[]
    msg: string
    error: null
    explain: string
}

export interface IUserLogItem {
    user: string
    action: string
    time: number
    params: { time: number }
}

// users => NewUser interfaces //
export interface INewUserResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

export interface INewUserForm {
    login: string
    password: string
}

// users => DeleteUser interfaces //
export interface IDeleteUserResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

// users => UpdateUser interfaces //
export interface IUpdateUserResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

export interface IUpdateUserForm {
    id: number
    login: string
    password: string
}

// danger/event => DangerList interfaces //
export interface IDangerListResponse {
    status: boolean
    data: IDangerListItem[]
    msg: string
    error: null
    explain: string
}

export interface IDangerListItem {
    id: number
    crt: string
    deviceInfo: IDangerListDeviceInfo
    createTst: number
    type: number
    titleVars: IDangerListTitleVars
    status?: number
    titles?: IDangerListTittles
}

export interface IDangerListDeviceInfo {
    entityId: number
    entityType: number
    type: number
    name: string
}

export interface IDangerListTitleVars {
    softName: string
}

export interface IDangerListTittles {
    ru: string
    en: string
}

// danger/event => EventList interfaces
export interface IEventListResponse {
    status: boolean
    data: IEventListItem[]
    msg: string
    error: null
    explain: string
}

export interface IEventListItem {
    id: number
    createTst: number
    status: number
    type: number
    priority: number
    deviceInfo: IEventDeviceInfo
    show: boolean
}

export interface IEventDeviceInfo {
    entityId: number
    entityType: number
    name: string
    type: number
}

// danger/event => Filter interfaces
export interface IFilterDevicesResponse {
    status: boolean
    data: IFilterDevicesItem[]
    msg: string
    error: null
    explain: string
}

export interface IFilterDevicesItem {
    entityId: number
    entityType: number
    typeId: number
    name: string
    ip: string
}

export interface IFilter {
    isClosed?: boolean
    crt?: number[]
    date?: number[]
    device?: IFilterDevice | {}
}

export interface IFilterDevice {
    entityId: number
    entityType: number
}

// devices => DevicesList interfaces //
export interface IDevicesListResponse {
    status: boolean
    data: IDeviceItem[]
    msg: string
    error: null
    explain: string
}

export interface IDeviceItem {
    id: number
    name: string
    ip: string
    type: number
    mac: string
    online: number | boolean
    agent: boolean
    antivirus: boolean
    isRouter: boolean
    wired: boolean
    wifiWired: boolean
}

//devices => IDeviceTasks interfaces //
export interface IDeviceTasksResponse {
    status: boolean
    data: IDangerListItem[]
    msg: string
    error: any
    explain: string
}

// devices => IDeviceInfo interfaces //
export interface IDeviceInfoResponse {
    status: boolean
    data: IDeviceInfoItem
    msg: string
    error: any
    explain: string
}

export interface IDeviceInfoItem {
    resume: IInfo
    ports: IPorts[]
    agentInfo?: IAgentInfo
}

export interface IInfo {
    os: string
    isUserOs: boolean
    dhcpStatus: string
    name: string
    type: number
}

export interface IPorts {
    number: number
    type: string
    protocol: string
    banner?: string
}

export interface IAgentInfo {
    main: IAgentInfoMain
    eq: IAgentInfoEq
    users: IAgentInfoUser[]
    usbDevices: IAgentInfoUsbDevice[]
}

export interface IAgentInfoMain {
    os: string
    hostname: string
    machineName: string
    dateInst: number
    vendor: string
    model: string
    build: string
}

export interface IAgentInfoEq {
    BIOSReleaseDate: string
    BIOSVersion: string
    totalRAM: number
    processorsInfo: IAgentInfoProcessors[]
    physicalDrives: IAgentInfoPhysicalDrfe[]
    logicalDrives: IAgentInfoLogicalDrfe[]
    videoInfo: IAgentInfoRamVideo[]
    ramInfo: IAgentInfoRam[]
}

export interface IAgentInfoProcessors {
    DataWidth: string
    Description: string
    DeviceID: string
    Manufacturer: string
    Name: string
    NumberOfCores: string
    ProcessorID: string
    Revision: string
    Status: string
    ThreadCount: string
}

export interface IAgentInfoPhysicalDrfe {
    Description: string
    DeviceID: string
    Manufacturer: string
    Model: string
    SerialNumber: string
    Size: string
    Status: string
}

export interface IAgentInfoLogicalDrfe {
    DriveFormat: string
    DriveType: string
    IsReady: boolean
    Name: string
    TotalFreeSpace: number
    TotalSize: number
    VolumeLabel: string
}

export interface IAgentInfoRamVideo {
    AdapterDACType: string
    AdapterRAM: string
    Availability: string
    Description: string
    DeviceID: string
    DriverVersion: string
    Manufacturer: string
    Name: string
    PNPDeviceID: string
    Status: string
    VideoArchitecture: string
    VideoMemoryType: string
    VideoProcessor: string
}

export interface IAgentInfoRam {
    BankLabel: string
    Capacity: string
    ConfiguredClockSpeed: string
    DeviceLocator: string
    Manufacturer: string
    Model: string
    PartNumber: string
    SerialNumber: string
    Tag: string
}

export interface IAgentInfoUser {
    login: string
    groups: string[]
    avatar: string
}

export interface IAgentInfoUsbDevice {
    name: string
    location: string
}

// devices => DevicePrograms interfaces //
export interface IDeviceProgramsResponse {
    status: boolean
    data: IDeviceProgramItem[]
    msg: string
    error: null
    explain: string
}

export interface IDeviceProgramItem {
    name: string
    version: string
    publisher: string
    location: string
    icon: string
    instTst: string
}

// settings => WiFi interfaces //
export interface IWiFiResponse {
    status: boolean
    data: IWiFiItem[]
    msg: string
    error: null
    explain: string
}

export interface IWiFiItem {
    ssid: string
    password: string
    channel: string
    width: string
    enabled: boolean
}

export interface IResponseWiFiResponse {
    status: boolean
    data: IResponseIWiFiItem
    msg: string
    error: null
    explain: string
}

export interface IResponseIWiFiItem {
    '5': IWiFiItem
    '2.4': IWiFiItem
}

export interface IWiFiForm {
    essid: string
    passwd: string
    channel: string
    width: string
    range: string
}

// settings => DHCP interfaces //
export interface IDHCPResponse {
    status: boolean
    data: IDHCPSettings
    msg: string
    error: null
    explain: string
}

export interface ISetDHCPSettingsResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

export interface IDHCPSettings {
    min: string | number
    max: string | number
    ip?: string
}

// settings => Network(Network = Lan+Wan) interfaces //
export interface INetworkResponse {
    status: boolean
    data: INetworkItems
    msg: string
    error: null
    explain: string
}

export interface INetworkItems {
    lan: ILanSettings
    wan: IWanSettings
}

export interface ILanSettings {
    ip: string
    mask: string
    dns: []
    gateway: string
}

export interface IWanSettings {
    params?: IWanSettingItem
    state: string
}

export interface IWanSettingItem {
    login?: string
    password?: string
    gateway?: string
    ip?: string
    mask?: string
    dns?: string
}

export interface ISetNetworkSettingsResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

export interface INetworkForm {
    gateway: string
    ipLan: string
    mask: string
    dns: []
    minDHCP: number
    maxDHCP: number
}

// settings => Firewall interfaces //
export type IFirewallResponseTransform = [string, IFirewallItem][]

export interface IFirewallResponse {
    status: boolean
    data: IFirewallRedirect
    msg: string
    error: null
    explain: string
}

export interface IFirewallRedirect {
    redirect: IFirewallItem[]
}

export interface IFirewallItem {
    real_name: string
    anonymous: boolean
    src_dport: string
    dest_ip: string
    device: string
    dest_port: string
    index: number
    name: string
    target: string
    src: string
    dest: string
    type: string
}

// setting => NewFirewall interfaces //
export interface INewFirewallResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

export interface INewFirewallForm {
    name: string
    dest_ip: string
    dest_port: string
    src_dport: string
    src_ip: string
}

// setting => DellFirewall interface //
export interface IDellFirewallResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

// setting => ChangeSettingWifi interfaces //
export interface ISetSettingWifiResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

// system => SystemInfo interfaces //
export interface ISystemInfoResponse {
    status: boolean
    data: ISystemInfo
    msg: string
    error: null
    explain: string
}

export interface ISystemInfo {
    version: string
    'update-settings': UpdateSettings
    loadedUpdate: boolean
}

export interface UpdateSettings {
    updating: string
    times?: number[]
}

// system => ChangeUpdating interfaces //
export interface IChangeUpdateResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

export interface IParamsChangeUpdate {
    times?: number[]
    updating: string
}

// system => SystemVersion interfaces //
export interface ISystemVersionResponse {
    status: boolean
    data: IVersion
    msg: string
    error: null
    explain: string
}

export interface IVersion {
    version: string
}

// system => AdminOutside interfaces //
export interface IAdminOutsideResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

// system => ServerInfo interfaces //
export interface IServerInfoResponse {
    status: boolean
    data: IServerInfoItem
    msg: string
    error: null
    explain: string
}

export interface IServerInfoItem {
    ip: string
    key: string
}

// system => Reset interfaces //
export interface IResetResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

// system => Reboot interfaces //
export interface IRebootResponse {
    status: boolean
    data: []
    msg: string
    error: null
    explain: string
}

// system => ChangeUpdating interfaces //
export interface IChangeUpdatingResponse {}

// auth interfaces //
export interface IAuthResponse {
    status: boolean
    data: string
    msg: string
    error: null
    explain: string
}

export interface IAuthForm {
    login: string
    password: string
    password2?: string
}
