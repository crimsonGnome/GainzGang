const { forwardTo } = require('prisma-binding');
const { hasPermission, loggedIn } = require('../utils');

const Query = {
  item: forwardTo('db'),
  ordersConnection: forwardTo('db'),
  filters: forwardTo('db'),
  subfilters: forwardTo('db'),
  me(parent, args, ctx, info) {
    //Check if there is a current user id
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  async itemsConnection(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      const items = await ctx.db.query.itemsConnection(
        {
          where: args.where,
        },
        info
      );

      return items;
    }
    // console.log(ctx.request.user);
    let filterList = [...ctx.request.user.filters];
    let subfilterList = ctx.request.user.subfilters;

    let main = {
      OR: [],
      AND: [],
    };
    const contains = {};
    // console.log(filterList);
    // console.log(subfilterList);
    if (
      filterList.length !== 0 ||
      subfilterList !== '' ||
      ctx.request.user.goodGame === true ||
      ctx.request.user.clearanceBoolean === true
    ) {
      for (i = 0; i < filterList.length; i++) {
        const inner = Object.create(contains);
        inner.title_contains = filterList[i];
        inner.description_contains = filterList[i];
        main.OR.push(inner);
      }

      if (
        ctx.request.user.goodGame === true ||
        ctx.request.user.clearanceBoolean === true ||
        subfilterList !== ''
      ) {
        if (ctx.request.user.goodGame === true) {
          const andObj = { goodGame: true };
          main.AND.push(andObj);
        }
        if (ctx.request.user.clearanceBoolean === true) {
          const andObj = { onClearance: true };
          main.AND.push(andObj);
        }
        if (subfilterList !== '') {
          const inner = Object.create(contains);
          // inner.title_contains = subfilterList;
          inner.description_contains = subfilterList;
          main.AND.push(inner);
        }
      }
      if (filterList.length === 0) {
        const andObj = { sold: false };
        main.OR.push(andObj);
      }
    } else {
      main = args.where;
    }
    // console.log(main);
    const items = await ctx.db.query.itemsConnection(
      {
        where: main,
        info,
      },
      info
    );
    // console.log(items);
    return items;
  },
  async items(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      const items = await ctx.db.query.items(
        {
          where: args.where,
          orderBy: args.orderBy,
          skip: args.skip,
          first: args.first,
        },
        info
      );

      return items;
    }
    let filterList = [...ctx.request.user.filters];
    let subfilterList = ctx.request.user.subfilters;

    let main = {
      OR: [],
      AND: [],
    };
    const contains = {};

    if (
      filterList.length !== 0 ||
      subfilterList !== '' ||
      ctx.request.user.goodGame === true ||
      ctx.request.user.clearanceBoolean === true
    ) {
      for (i = 0; i < filterList.length; i++) {
        const inner = Object.create(contains);
        inner.title_contains = filterList[i];
        inner.description_contains = filterList[i];
        main.OR.push(inner);
      }

      if (
        ctx.request.user.goodGame === true ||
        ctx.request.user.clearanceBoolean === true ||
        subfilterList !== ''
      ) {
        if (ctx.request.user.goodGame === true) {
          const andObj = { goodGame: true };
          main.AND.push(andObj);
        }
        if (ctx.request.user.clearanceBoolean === true) {
          const andObj = { onClearance: true };
          main.AND.push(andObj);
        }
        if (subfilterList !== '') {
          const inner = Object.create(contains);
          // inner.title_contains = subfilterList;
          inner.description_contains = subfilterList;
          main.AND.push(inner);
        }
      }
      if (filterList.length === 0) {
        const andObj = { sold: false };
        main.OR.push(andObj);
      }
    } else {
      main = args.where;
    }
    // console.log(main);
    const items = await ctx.db.query.items(
      {
        where: main,
        orderBy: args.orderBy,
        skip: args.skip,
        first: args.first,
        info,
      },
      info
    );
    // console.log(items);
    return items;
  },
  async users(parent, args, ctx, info) {
    //Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in');
    }

    //Check if user jas permisson to query all Users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSOINUPDATE']);
    //Query All Users
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    //make sure they are logged in
    if (!ctx.request.userId) {
      throw new Error(`You aren't logged in! `);
    }
    //query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id },
      },
      info
    );

    //Check if they have the persmisions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );

    if (!ownsOrder && !hasPermissionToSeeOrder) {
      throw new Error(`You can't see this buddd`);
    }
    //return this order

    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    loggedIn(ctx.request.userId);

    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );
    if (hasPermissionToSeeOrder) {
      return ctx.db.query.orders({}, info);
    }

    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
      info
    );
  },
  ordersConnectionUser(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.ordersConnection(
      {
        where: { user: { id: userId } },
      },
      info
    );
  },
};

module.exports = Query;
