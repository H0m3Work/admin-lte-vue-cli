<template>
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img :src="image.link" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">{{ author }}</a>
      </div>
    </div>
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
        <li class="nav-item" v-for="sub in menus" v-bind:key="sub.title" :class="hasTree(sub) ? 'has-treeview' : ''">
          <router-link :to="sub.link" class="nav-link">
            <i class="nav-icon" :class="sub.icon"></i>
            <p>
              {{ sub.title }}
              <i class="right fas fa-angle-left" v-show="hasTree(sub)"></i>
              <span class="right badge" v-show="hasLabel(sub)" v-for="label in sub.labels" :key="label.text" :class="label.status">{{ label.text }}</span>
            </p>
          </router-link>
          <ul class="nav nav-treeview" v-show="hasTree(sub)">
            <li class="nav-item" v-for="child in sub.childs" :key="child.title">
              <router-link :to="child.link" class="nav-link">
                <i class="nav-icon" :class="child.icon"></i>
                <p>{{ child.title }}</p>
              </router-link>
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
    return {
      author: 'Hung Cuong',
      image: {
        link: require('@/assets/img/user2-160x160.jpg')
      },
      menus: [{
          title: 'Dashboard',
          icon: 'fas fa-tachometer-alt',
          link: '/dashboard',
          childs: [{
              title: 'Dashboard 1',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Dashboard 2',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Dashboard 3',
              icon: 'far fa-circle',
              link: '#',
            },
          ]
        },
        {
          title: 'Widgets',
          icon: 'fas fa-th',
          link: '#',
          labels: [{
            status: 'badge-danger',
            text: 'New'
          }]
        },
        {
          title: 'Layout Options',
          icon: 'fas fa-copy',
          link: '#',
          labels: [{
            status: 'badge-info',
            text: '6'
          }],
          childs: [{
              title: 'Top Navigation',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Boxed',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Fixed Sidebar',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Fixed Navbar',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Fixed Footer',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Collapsed Sidebar',
              icon: 'far fa-circle',
              link: '#',
            }
          ],
        },
        {
          title: 'Charts',
          icon: 'fas fa-chart-pie',
          link: '#',
          childs: [{
              title: 'ChartJS',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Flot',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Inline',
              icon: 'far fa-circle',
              link: '#',
            }
          ]
        },
        {
          title: 'UI Elements',
          icon: 'fas fa-tree',
          link: '#',
          childs: [{
              title: 'General',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Icons',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Buttons',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Sliders',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Modals & Alerts',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Navbar & Tabs',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Timeline',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'Ribbons',
              icon: 'far fa-circle',
              link: '#',
            }
          ]
        },
        {
          title: 'Forms',
          icon: 'fas fa-edit',
          link: '#',
          childs: [{
              title: 'General Elements',
              icon: 'far fa-circle',
              link: '/form/general',
            },
            {
              title: 'Advanced Elements',
              icon: 'far fa-circle',
              link: '/form/advanced',
            },
            {
              title: 'Editors',
              icon: 'far fa-circle',
              link: '#',
            }
          ]
        },
        {
          title: 'Tables',
          icon: 'fas fa-table',
          link: '#',
          childs: [{
              title: 'Simple Tables',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'DataTables',
              icon: 'far fa-circle',
              link: '#',
            },
            {
              title: 'jsGrid',
              icon: 'far fa-circle',
              link: '#',
            },
          ]
        }
      ]
    }
  },
  methods: {
    hasLabel: function(item) {
      return item.labels ? true : false;
    },
    hasTree: function(item) {
      return item.childs ? true : false;
    }
  }
}
</script>