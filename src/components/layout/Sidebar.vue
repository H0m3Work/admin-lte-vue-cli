<template>
	<div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="pages/widgets.html" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Widgets
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Layout Options
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/boxed.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-topnav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-footer.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Charts
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>ChartJS</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Flot</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
                UI Elements
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/UI/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/icons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Icons</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/buttons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Buttons</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/sliders.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sliders</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/modals.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Modals & Alerts</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/navbar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Navbar & Tabs</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/timeline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Timeline</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/ribbons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ribbons</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Forms
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/forms/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/advanced.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/editors.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Editors</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Tables
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
</template>

<script>
	export default {
    name: 'Sidebar',
		data() {
			// menus: [
			// 	{
			// 		title: 'Dashboard',
			// 		icon: 'fas fa-tachometer-alt',
			// 		childs: [
			// 			{
			// 				title: 'Dashboard 1',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Dashboard 2',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Dashboard 3',
			// 				icon: 'far fa-circle',
			// 			},
			// 		]
			// 	}, 
			// 	{
			// 		title: 'Widgets',
			// 		icon: 'fas fa-th',
   //        label: [
   //          status: 'badge-danger',
   //          text: 'New'
   //        ]
			// 	},
			// 	{
			// 		title: 'Layout Options',
			// 		icon: 'fas fa-copy',
   //        label: [
   //          status: 'badge-info',
   //          text: '6'
   //        ]
			// 		childs: [
			// 			{
			// 				title: 'Top Navigation',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Boxed',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Fixed Sidebar',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Fixed Navbar',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Fixed Footer',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Collapsed Sidebar',
			// 				icon: 'far fa-circle',
			// 			}
			// 		],
			// 	},
			// 	{
			// 		title: 'Charts',
			// 		icon: 'fas fa-chart-pie',
			// 		childs: [
			// 			{
			// 				title: 'ChartJS',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Flot',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Inline',
			// 				icon: 'far fa-circle',
			// 			}
			// 		]
			// 	},
			// 	{
			// 		title: 'UI Elements',
			// 		icon: 'fas fa-tree',
			// 		childs: [
			// 			{
			// 				title: 'General',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Icons',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Buttons',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Sliders',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Modals & Alerts',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Navbar & Tabs',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Timeline',
			// 				icon: 'far fa-circle',
			// 			},
			// 			{
			// 				title: 'Ribbons',
			// 				icon: 'far fa-circle',
			// 			}
			// 		]
			// 	},
			// 	{
			// 		title: 'Forms',
			// 		icon: 'fas fa-edit',
			// 		childs: [
			// 			{
			// 				title: 'General Elements',
			// 				icon: 'far fa-circle'
			// 			},						
			// 			{
			// 				title: 'Advanced Elements',
			// 				icon: 'far fa-circle'
			// 			},						
			// 			{
			// 				title: 'Editors',
			// 				icon: 'far fa-circle'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		title: 'Tables',
			// 		icon: 'fas fa-table',
			// 		childs: [
			// 			{
			// 				title: 'Simple Tables',
			// 				icon: 'far fa-circle'
			// 			},
			// 			{
			// 				title: 'DataTables',
			// 				icon: 'far fa-circle'
			// 			},
			// 			{
			// 				title: 'jsGrid',
			// 				icon: 'far fa-circle'
			// 			},
			// 		]
			// 	}
			// ]
		}
	}
</script>
