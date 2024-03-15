/**
 * 提供 子节点 Debugger 的能力
 * 
 * 拟定
 * 
 * 1. 确定场景：
 *      Q: why
 *      A: 因为 column json 不一定是由自己渲染的，也有可能是由 ant scemaform 渲染，
 *         所以需要给 DebuggerProvide 一个场景，例如 renderer="SchemaForm" / renderer="Table"
 * 2. 初始化
 *      确定场景后，执行不同的初始化方式，但最终需要落实到一个接口 即 JsonElementTool
 * 
 *      初始化：遍历 columns 每一个节点，判断出 node 类型，在 dom 中查询出 element 给他一个 data-set 装有element反查的所需数据
 *       
 *      findElementByJson 使用 jsonFragment 片段 找出页面中渲染出的元素
 * 
 * 3. 捕获/点击
 *      捕获鼠标事件，浮动到 装有对应 data-set 节点时呢， 展示 focus 状态，点击选中节点。
 * 
 *     
 */

import React, { PropsWithChildren, createContext, useRef } from "react"

interface JsonElementTool {


    findElementByJson(json: Record<string, any>, jsonFragment: Record<string, any>): Element

    findJsonByElement(element): Record<string, any>
}

export const context = createContext({})

type DebuggerProviderProps = {

}

export function DebuggerProvider({ children }: PropsWithChildren<DebuggerProviderProps>) {
    const rootEl = useRef(null)
    return <context.Provider value={{}}>
        <div ref={rootEl}>
            {children}
        </div>
    </context.Provider>
}

