<template>
  <div class="profile">
    <div class="vcard">
      <div class="vcard-left">
        <div class="vcard-avatar glass-material">
          <img class="avatar" src="@/assets/images/settings/avatar.jfif" alt="profile photo" />
        </div>

        <div class="vcard-names">
          <div class="name">百里飞洋</div>
          <div class="nickname">Barry-Flynn</div>
        </div>
      </div>

      <div class="vcard-right">
        <div class="vcard-profile-bio">
          <span class="mgc_quote_left_fill"> </span>
          星河滚烫，无问西东
          <span class="mgc_quote_right_fill"> </span>
        </div>
        <div class="vcard-details">
          <div class="detail-item" v-for="item in vcardDetails" :key="item.id">
            <span class="detail-item-icon" :class="'mgc_' + item.icon"> </span>
            <span class="detail-item-name"> {{ item.name }} </span>
            <a class="detail-item-text" :href="item.link" target="_blank" rel="nofollow">{{
              item.text
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutDeveloper'
})

import { getLocalTime, formatDate } from '@/utils/getTime'

// 获取东八区(北京)时间，zone为8
const localTime = getLocalTime(8)
// 格式化时间为
const formattedDate = formatDate(localTime)

// 详情数据
const vcardDetails = [
  {
    id: 1,
    name: 'Location',
    icon: 'location_line',
    text: 'China'
  },
  {
    id: 2,
    name: 'LocalTime',
    icon: 'clock_2_line',
    text: formattedDate
  },
  {
    id: 3,
    name: 'Email',
    icon: 'mail_line',
    text: 'Barry-Flynn@qq.com',
    link: 'mailto:Barry-Flynn@qq.com'
  },
  {
    id: 4,
    name: 'Website',
    icon: 'link_line',
    text: 'blog.meta-code.top',
    link: 'https://blog.meta-code.top'
  },
  {
    id: 5,
    name: 'GitHub',
    icon: 'github_line',
    text: 'Barry-Flynn',
    link: 'https://github.com/Barry-Flynn'
  },
  {
    id: 6,
    name: 'Bilibili',
    icon: 'live_line',
    text: '百里飞洋',
    link: 'https://space.bilibili.com/349963315'
  },
  {
    id: 7,
    name: 'Weibo',
    icon: 'weibo_line',
    text: '百里飞洋',
    link: 'https://weibo.com/6327778914'
  },
  {
    id: 8,
    name: 'Twitter',
    icon: 'social_x_line',
    text: '@BarryFlynn1024',
    link: 'https://twitter.com/BarryFlynn1024'
  },
  {
    id: 9,
    name: 'Youtube',
    icon: 'youtube_line',
    text: '@Barry-Flynn',
    link: 'https://www.youtube.com/@Barry-Flynn'
  }
]
</script>

<style scoped lang="scss">
.profile {
  border-radius: 0 30px 30px 0;
  overflow: hidden;
}

.vcard {
  padding: 20px;
  // background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .vcard-left {
    .vcard-avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      // 禁止选中
      user-select: none;
      // 禁止拖拽
      // pointer-events: none;
      // 过渡
      transition: all 0.4s ease-in-out;

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      &:hover {
        // 旋转
        transform: rotate(360deg);
      }
    }

    .vcard-names {
      color: rgba(255, 255, 255, 0.9);
      padding-top: 16px;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

      .name {
        font-size: 24px;
        line-height: 1.25;
        font-weight: 600;
      }

      .nickname {
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
      }
    }
  }

  .vcard-right {
    // border: 1px solid red;
    width: 300px;

    .vcard-profile-bio {
      height: 150px;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .vcard-details {
      margin-top: 10px;
      text-align: left;

      .detail-item {
        padding-top: 6px;
        color: rgba(255, 255, 255, 0.6);
        display: flex;
        align-items: center;

        .detail-item-icon {
          font-size: 16px;
          margin-right: 4px;
        }

        .detail-item-name {
          font-size: 14px;
          margin-right: 8px;
          width: 70px;
        }

        .detail-item-text {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;

          &:hover {
            color: rgb(9, 105, 218);
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
