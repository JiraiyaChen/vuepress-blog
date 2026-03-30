# 常用 OpenClaw 指令总结

## 基本命令
### 查看模型
```bash
openclaw models --help
```
- 显示模型命令的详细帮助信息。

### 发送消息
```bash
openclaw message send --target +15555550123 --message "Hi"
```
- 使用你的 Web 会话发送消息。

### 检查系统状态
```bash
openclaw status
```
- 查看频道健康状态和最近会话。

### 查看日志
```bash
openclaw logs
```
- 通过 RPC 跟踪网关日志。

### 健康检查
```bash
openclaw doctor
```
- 诊断和修复网关及频道的健康问题。

## 网关相关
### 启动网关
```bash
openclaw gateway --port 18789
```
- 本地运行 WebSocket 网关。

### 开发模式网关
```bash
openclaw --dev gateway
```
- 运行开发模式网关（隔离的状态和配置）。

### 强制重启网关
```bash
openclaw gateway --force
```
- 杀掉任何绑定默认网关端口的进程，然后重新启动。

## 配置和安装
### 配置向导
```bash
openclaw configure
```
- 启动交互式设置向导。

### 配置管理
```bash
openclaw config *
```
- 访问本地或远程的配置管理工具。

### 卸载
```bash
openclaw uninstall
```
- 仅保留 CLI（卸载网关服务与本地数据）。

## 其他实用命令
### 技能查看
```bash
openclaw skills *
```
- 查看并检查可用技能。

### 安全检查
```bash
openclaw security *
```
- 执行本地安全配置审计。

### 系统更新
```bash
openclaw update *
```
- 更新 OpenClaw 并检查更新状态。

## 示例
### 示例 1: 登录 Telegram 频道
```bash
openclaw channels login --verbose
```
- 启用 Telegram Web，并显示 QR + 连接日志。

### 示例 2: 打开控制 UI
```bash
openclaw dashboard
```
- 使用当前 token 打开控制面板。