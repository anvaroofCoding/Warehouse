import { ComponentLoader } from 'adminjs'
import { fileURLToPath } from 'url'

const componentLoader = new ComponentLoader()
const dashboardPath = fileURLToPath(
	new URL('./components/Dashboard.jsx', import.meta.url),
)
const placeholderPath = fileURLToPath(
	new URL('./components/PlaceholderPage.jsx', import.meta.url),
)
const loginPath = fileURLToPath(
	new URL('./components/Login.jsx', import.meta.url),
)
const sidebarBrandingPath = fileURLToPath(
	new URL('./components/SidebarBranding.jsx', import.meta.url),
)
const topBarPath = fileURLToPath(
	new URL('./components/TopBar.jsx', import.meta.url),
)
const purchaseUsersEditPath = fileURLToPath(
	new URL('./components/PurchaseUsersEdit.jsx', import.meta.url),
)
const purchaseItemsEditPath = fileURLToPath(
	new URL('./components/PurchaseItemsEdit.jsx', import.meta.url),
)
const purchaseDownloadActionPath = fileURLToPath(
	new URL('./components/PurchaseDownloadAction.jsx', import.meta.url),
)
const purchaseApprovalActionPath = fileURLToPath(
	new URL('./components/PurchaseApprovalAction.jsx', import.meta.url),
)
const purchaseRequestListValuePath = fileURLToPath(
	new URL('./components/PurchaseRequestListValue.jsx', import.meta.url),
)
const purchaseRequestShowPath = fileURLToPath(
	new URL('./components/PurchaseRequestShow.jsx', import.meta.url),
)
const purchaseOrderWorkspacePath = fileURLToPath(
	new URL('./components/PurchaseOrderWorkspace.jsx', import.meta.url),
)
const purchaseDispatchWorkspacePath = fileURLToPath(
	new URL('./components/PurchaseDispatchWorkspace.jsx', import.meta.url),
)
const purchaseReceiveWorkspacePath = fileURLToPath(
	new URL('./components/PurchaseReceiveWorkspace.jsx', import.meta.url),
)
const warehouseOverviewPath = fileURLToPath(
	new URL('./components/WarehouseOverview.jsx', import.meta.url),
)
const chiqimQilishPath = fileURLToPath(
	new URL('./components/ChiqimQilish.jsx', import.meta.url),
)
const inventoryHistoryPath = fileURLToPath(
	new URL('./components/InventoryHistory.jsx', import.meta.url),
)

componentLoader.override('Login', loginPath)
componentLoader.override('SidebarBranding', sidebarBrandingPath)
componentLoader.override('TopBar', topBarPath)

const Components = {
	Dashboard: componentLoader.add('ZaxiraDashboard', dashboardPath),
	PlaceholderPage: componentLoader.add(
		'ZaxiraPlaceholderPage',
		placeholderPath,
	),
	PurchaseUsersEdit: componentLoader.add(
		'ZaxiraPurchaseUsersEdit',
		purchaseUsersEditPath,
	),
	PurchaseItemsEdit: componentLoader.add(
		'ZaxiraPurchaseItemsEdit',
		purchaseItemsEditPath,
	),
	PurchaseDownloadAction: componentLoader.add(
		'ZaxiraPurchaseDownloadAction',
		purchaseDownloadActionPath,
	),
	PurchaseApprovalAction: componentLoader.add(
		'ZaxiraPurchaseApprovalAction',
		purchaseApprovalActionPath,
	),
	PurchaseRequestListValue: componentLoader.add(
		'ZaxiraPurchaseRequestListValue',
		purchaseRequestListValuePath,
	),
	PurchaseRequestShow: componentLoader.add(
		'ZaxiraPurchaseRequestShow',
		purchaseRequestShowPath,
	),
	PurchaseOrderWorkspace: componentLoader.add(
		'ZaxiraPurchaseOrderWorkspace',
		purchaseOrderWorkspacePath,
	),
	PurchaseDispatchWorkspace: componentLoader.add(
		'ZaxiraPurchaseDispatchWorkspace',
		purchaseDispatchWorkspacePath,
	),
	PurchaseReceiveWorkspace: componentLoader.add(
		'ZaxiraPurchaseReceiveWorkspace',
		purchaseReceiveWorkspacePath,
	),
	WarehouseOverview: componentLoader.add(
		'ZaxiraWarehouseOverview',
		warehouseOverviewPath,
	),
	ChiqimQilish: componentLoader.add('ZaxiraChiqimQilish', chiqimQilishPath),
	InventoryHistory: componentLoader.add(
		'ZaxiraInventoryHistory',
		inventoryHistoryPath,
	),
}

export { componentLoader, Components }
