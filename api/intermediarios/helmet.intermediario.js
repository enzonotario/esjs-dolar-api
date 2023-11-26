class ContentSecurityPolicyDefaultHandler {
  apply(c) {
    c.res.headers.set(
      'Content-Security-Policy',
      "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
    )
  }
}
const defaultCspDirectives = {
  kind: 'string',
  defaultSrc: ["'self'"],
  baseUri: ["'self'"],
  fontSrc: ["'self' https: data:"],
  frameAncestors: ["'self'"],
  imgSrc: ["'self' data:"],
  objectSrc: ["'none'"],
  scriptSrc: ["'self'"],
  scriptSrcAttr: ["'none'"],
  styleSrc: ["'self' https: 'unsafe-inline'"],
  upgradeInsecureRequests: true,
  formAction: ["'self'"],
}
// Convert the specified CSP directives into a more manageable format.
// If there are some functional directives, this function converts the specified
// directives into ValidatedFunctionalDirectives. Otherwise, it converts them into
// ValidatedStringDirectives.
function parseDirectives(directives, useDefault) {
  const {
    defaultSrc,
    baseUri,
    fontSrc,
    formAction,
    frameAncestors,
    frameSrc,
    imgSrc,
    objectSrc,
    scriptSrc,
    scriptSrcElem,
    scriptSrcAttr,
    styleSrc,
    styleSrcElem,
    styleSrcAttr,
    workerSrc,
    sandbox,
    upgradeInsecureRequests,
    childSrc,
    connectSrc,
    manifestSrc,
    mediaSrc,
    prefetchSrc,
    requireTrustedTypesFor,
    trustedTypes,
    reportUri,
    reportTo,
  } = directives
  let isFunctional = false
  const process = (directive) => {
    if (!directive) return undefined

    const value = []
    const func = []
    for (const v of directive) {
      if (typeof v === 'string') {
        value.push(v)
      } else {
        isFunctional = true
        func.push(v)
      }
    }
    if (!isFunctional) return value

    return { value, func }
  }
  const processSandbox = (directive) => {
    if (!directive) return undefined

    const value = []
    const func = []
    for (const v of directive) {
      if (typeof v === 'string') {
        value.push(v)
      } else {
        isFunctional = true
        func.push(v)
      }
    }
    if (!isFunctional) return value

    return { value, func }
  }
  const processReportTo = (reportTo) => {
    if (!reportTo) return undefined

    if (typeof reportTo === 'string') return reportTo

    isFunctional = true
    return reportTo
  }
  const newDefaultSrc =
    defaultSrc === true || (useDefault && defaultSrc === undefined)
      ? defaultCspDirectives.defaultSrc
      : process(defaultSrc)
  const newBaseUri =
    baseUri === true || (useDefault && baseUri === undefined)
      ? defaultCspDirectives.baseUri
      : process(baseUri)
  const newFontSrc =
    fontSrc === true || (useDefault && fontSrc === undefined)
      ? defaultCspDirectives.fontSrc
      : process(fontSrc)
  const newFormAction =
    formAction === true || (useDefault && formAction === undefined)
      ? defaultCspDirectives.formAction
      : process(formAction)
  const newFrameAncestors =
    frameAncestors === true || (useDefault && frameAncestors === undefined)
      ? defaultCspDirectives.frameAncestors
      : process(frameAncestors)
  const newFrameSrc = process(frameSrc)
  const newImgSrc =
    imgSrc === true || (useDefault && imgSrc === undefined)
      ? defaultCspDirectives.imgSrc
      : process(imgSrc)
  const newObjectSrc =
    objectSrc === true || (useDefault && objectSrc === undefined)
      ? defaultCspDirectives.objectSrc
      : process(objectSrc)
  const newScriptSrc =
    scriptSrc === true || (useDefault && scriptSrc === undefined)
      ? defaultCspDirectives.scriptSrc
      : process(scriptSrc)
  const newScriptSrcElem = process(scriptSrcElem)
  const newScriptSrcAttr =
    scriptSrcAttr === true || (useDefault && scriptSrcAttr === undefined)
      ? defaultCspDirectives.scriptSrcAttr
      : process(scriptSrcAttr)
  const newStyleSrc =
    styleSrc === true || (useDefault && styleSrc === undefined)
      ? defaultCspDirectives.styleSrc
      : process(styleSrc)
  const newStyleSrcElem = process(styleSrcElem)
  const newStyleSrcAttr = process(styleSrcAttr)
  const newWorkerSrc = process(workerSrc)
  const newSandbox = processSandbox(sandbox)
  const newUpgradeInsecureRequests =
    upgradeInsecureRequests === true ||
    (useDefault && upgradeInsecureRequests === undefined)
      ? defaultCspDirectives.upgradeInsecureRequests
      : upgradeInsecureRequests
  const newChildSrc = process(childSrc)
  const newConnectSrc = process(connectSrc)
  const newManifestSrc = process(manifestSrc)
  const newMediaSrc = process(mediaSrc)
  const newPrefetchSrc = process(prefetchSrc)
  const newRequireTrustedTypesFor = !!requireTrustedTypesFor
  const newTrustedTypes = process(trustedTypes)
  const newReportUri = process(reportUri)
  const newReportTo = processReportTo(reportTo)
  return {
    kind: isFunctional ? 'functional' : 'string',
    defaultSrc: newDefaultSrc,
    baseUri: newBaseUri,
    fontSrc: newFontSrc,
    formAction: newFormAction,
    frameAncestors: newFrameAncestors,
    frameSrc: newFrameSrc,
    imgSrc: newImgSrc,
    objectSrc: newObjectSrc,
    scriptSrc: newScriptSrc,
    scriptSrcElem: newScriptSrcElem,
    scriptSrcAttr: newScriptSrcAttr,
    styleSrc: newStyleSrc,
    styleSrcElem: newStyleSrcElem,
    styleSrcAttr: newStyleSrcAttr,
    workerSrc: newWorkerSrc,
    sandbox: newSandbox,
    upgradeInsecureRequests: newUpgradeInsecureRequests,
    childSrc: newChildSrc,
    connectSrc: newConnectSrc,
    manifestSrc: newManifestSrc,
    mediaSrc: newMediaSrc,
    prefetchSrc: newPrefetchSrc,
    requireTrustedTypesFor: newRequireTrustedTypesFor,
    trustedTypes: newTrustedTypes,
    reportUri: newReportUri,
    reportTo: newReportTo,
  }
}
// Build the CSP field value for string-only case
function buildStringDirectives(directives) {
  const {
    defaultSrc,
    baseUri,
    fontSrc,
    formAction,
    frameAncestors,
    frameSrc,
    imgSrc,
    objectSrc,
    scriptSrc,
    scriptSrcElem,
    scriptSrcAttr,
    styleSrc,
    styleSrcElem,
    styleSrcAttr,
    workerSrc,
    sandbox,
    upgradeInsecureRequests,
    childSrc,
    connectSrc,
    manifestSrc,
    mediaSrc,
    prefetchSrc,
    requireTrustedTypesFor,
    trustedTypes,
    reportUri,
    reportTo,
  } = directives
  const arr = []
  if (defaultSrc) arr.push(`default-src ${defaultSrc.join(' ')}`)

  if (baseUri) arr.push(`base-uri ${baseUri.join(' ')}`)

  if (fontSrc) arr.push(`font-src ${fontSrc.join(' ')}`)

  if (formAction) arr.push(`form-action ${formAction.join(' ')}`)

  if (frameAncestors) arr.push(`frame-ancestors ${frameAncestors.join(' ')}`)

  if (frameSrc) arr.push(`frame-src ${frameSrc.join(' ')}`)

  if (imgSrc) arr.push(`img-src ${imgSrc.join(' ')}`)

  if (objectSrc) arr.push(`object-src ${objectSrc.join(' ')}`)

  if (scriptSrc) arr.push(`script-src ${scriptSrc.join(' ')}`)

  if (scriptSrcElem) arr.push(`script-src-elem ${scriptSrcElem.join(' ')}`)

  if (scriptSrcAttr) arr.push(`script-src-attr ${scriptSrcAttr.join(' ')}`)

  if (styleSrc) arr.push(`style-src ${styleSrc.join(' ')}`)

  if (styleSrcElem) arr.push(`style-src-elem ${styleSrcElem.join(' ')}`)

  if (styleSrcAttr) arr.push(`style-src-attr ${styleSrcAttr.join(' ')}`)

  if (workerSrc) arr.push(`worker-src ${workerSrc.join(' ')}`)

  if (sandbox) arr.push(`sandbox ${sandbox.join(' ')}`)

  if (upgradeInsecureRequests) arr.push('upgrade-insecure-requests')

  if (childSrc) arr.push(`child-src ${childSrc.join(' ')}`)

  if (connectSrc) arr.push(`connect-src ${connectSrc.join(' ')}`)

  if (manifestSrc) arr.push(`manifest-src ${manifestSrc.join(' ')}`)

  if (mediaSrc) arr.push(`media-src ${mediaSrc.join(' ')}`)

  if (prefetchSrc) arr.push(`prefetch-src ${prefetchSrc.join(' ')}`)

  if (trustedTypes) {
    if (trustedTypes.length === 0) arr.push('trusted-types')
    else arr.push(`trusted-types ${trustedTypes.join(' ')}`)
  }
  if (requireTrustedTypesFor) arr.push("require-trusted-types-for 'script'")

  if (reportUri) arr.push(`report-uri ${reportUri.join(' ')}`)

  if (reportTo) arr.push(`report-to ${reportTo}`)

  return arr.join(';')
}
// Build the CSP field value for functional directives case
function buildFunctionalDirectives(directives) {
  const {
    defaultSrc,
    baseUri,
    fontSrc,
    formAction,
    frameAncestors,
    frameSrc,
    imgSrc,
    objectSrc,
    scriptSrc,
    scriptSrcElem,
    scriptSrcAttr,
    styleSrc,
    styleSrcElem,
    styleSrcAttr,
    workerSrc,
    sandbox,
    upgradeInsecureRequests,
    childSrc,
    connectSrc,
    manifestSrc,
    mediaSrc,
    prefetchSrc,
    requireTrustedTypesFor,
    trustedTypes,
    reportUri,
    reportTo,
  } = directives
  const arr = []
  const push = (directive, name) => {
    if (directive) {
      const len = directive.value.length
      if (directive.func) {
        if (len === 0) {
          arr.push((req, res) => {
            let _a
            return `${name} ${
              (_a = directive.func) === null || _a === void 0
                ? void 0
                : _a.map((f) => f(req, res)).join(' ')
            }`
          })
        } else {
          arr.push((req, res) => {
            let _a
            return `${name} ${directive.value.join(' ')} ${
              (_a = directive.func) === null || _a === void 0
                ? void 0
                : _a.map((f) => f(req, res)).join(' ')
            }`
          })
        }
      } else {
        arr.push((_req, _res) => `${name} ${directive.value.join(' ')}`)
      }
    }
  }
  push(defaultSrc, 'default-src')
  push(baseUri, 'base-uri')
  push(fontSrc, 'font-src')
  push(formAction, 'form-action')
  push(frameAncestors, 'frame-ancestors')
  push(frameSrc, 'frame-src')
  push(imgSrc, 'img-src')
  push(objectSrc, 'object-src')
  push(scriptSrc, 'script-src')
  push(scriptSrcElem, 'script-src-elem')
  push(scriptSrcAttr, 'script-src-attr')
  push(styleSrc, 'style-src')
  push(styleSrcElem, 'style-src-elem')
  push(styleSrcAttr, 'style-src-attr')
  push(workerSrc, 'worker-src')
  push(sandbox, 'sandbox')
  if (upgradeInsecureRequests)
    arr.push((_req, _res) => 'upgrade-insecure-requests')

  push(childSrc, 'child-src')
  push(connectSrc, 'connect-src')
  push(manifestSrc, 'manifest-src')
  push(mediaSrc, 'media-src')
  push(prefetchSrc, 'prefetch-src')
  if (trustedTypes) {
    const len = trustedTypes.value.length
    if (trustedTypes.func) {
      if (len === 0) {
        arr.push((req, res) => {
          let _a
          return `trusted-types ${
            (_a = trustedTypes.func) === null || _a === void 0
              ? void 0
              : _a.map((f) => f(req, res)).join(' ')
          }`
        })
      } else {
        arr.push((req, res) => {
          let _a
          return `trusted-types ${trustedTypes.value.join(' ')} ${
            (_a = trustedTypes.func) === null || _a === void 0
              ? void 0
              : _a.map((f) => f(req, res)).join(' ')
          }`
        })
      }
    } else {
      if (len === 0) arr.push((_req, _res) => 'trusted-types')
      else
        arr.push(
          (_req, _res) => `trusted-types ${trustedTypes.value.join(' ')}`,
        )
    }
  }
  if (requireTrustedTypesFor)
    arr.push((_req, _res) => "require-trusted-types-for 'script'")

  push(reportUri, 'report-uri')
  if (typeof reportTo === 'string')
    arr.push((_req, _res) => `report-to ${reportTo}`)
  else if (reportTo) arr.push((req, res) => `report-to ${reportTo(req, res)}`)

  return (req, res) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += arr[i](req, res)
      if (i < arr.length - 1) str += ';'
    }
    return str
  }
}
// Header Fields Handlers
class ContentSecurityPolicyHandler {
  constructor(options) {
    this.value = ''
    this.header = ''
    const { useDefaults, directives, reportOnly } = options
    this.header =
      reportOnly === undefined || reportOnly === false
        ? 'Content-Security-Policy'
        : 'Content-Security-Policy-Report-Only'
    if (directives === undefined || Object.keys(directives).length === 0) {
      if (useDefaults === false) {
        this.value = ''
        this.set = (_) => {}
        return
      }
      this.value = buildStringDirectives(defaultCspDirectives)
      this.set = (c) => {
        c.res.headers.set(this.header, this.value)
      }
      return
    }
    const validatedDirectives = parseDirectives(
      directives,
      !(useDefaults === false),
    )
    if (validatedDirectives.kind === 'string') {
      this.value = buildStringDirectives(validatedDirectives)
      this.set = (c) => {
        c.res.headers.set(this.header, this.value)
      }
    } else {
      this.value = buildFunctionalDirectives(validatedDirectives)
      this.set = (c) => {
        c.res.headers.set(this.header, this.value(c.req, c.res))
      }
    }
  }

  apply(c) {
    this.set(c)
  }
}
class CrossOriginEmbedderPolicyDefaultHandler {
  apply(c) {
    c.res.headers.set('Cross-Origin-Embedder-Policy', 'require-corp')
  }
}
class CrossOriginEmbedderPolicyHandler {
  constructor(options) {
    this.value = options.policy
  }

  apply(c) {
    c.res.headers.set('Cross-Origin-Embedder-Policy', this.value)
  }
}
class CrossOriginOpenerPolicyDefaultHandler {
  apply(c) {
    c.res.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  }
}
class CrossOriginOpenerPolicyHandler {
  constructor(options) {
    this.value = options.policy
  }

  apply(c) {
    c.res.headers.set('Cross-Origin-Opener-Policy', this.value)
  }
}
class CrossOriginResourcePolicyDefaultHandler {
  apply(c) {
    c.res.headers.set('Cross-Origin-Resource-Policy', 'same-origin')
  }
}
class CrossOriginResourcePolicyHandler {
  constructor(options) {
    this.value = options.policy
  }

  apply(c) {
    c.res.headers.set('Cross-Origin-Resource-Policy', this.value)
  }
}
class ReferrerPolicyDefaultHandler {
  apply(c) {
    c.res.headers.set('Referrer-Policy', 'no-referrer')
  }
}
class ReferrerPolicyHandler {
  constructor(options) {
    if (typeof options.policy === 'string') this.value = options.policy
    else this.value = options.policy.join()
  }

  apply(c) {
    c.res.headers.set('Referrer-Policy', this.value)
  }
}
class HstsDefaultHandler {
  apply(c) {
    c.res.headers.set(
      'Strict-Transport-Security',
      'max-age=15552000; includeSubDomains',
    )
  }
}
class HstsHandler {
  constructor(options) {
    const optionsAll = {
      maxAge: options.maxAge === undefined ? 15552000 : options.maxAge,
      includeSubDomains:
        options.includeSubDomains === undefined
          ? true
          : options.includeSubDomains,
      preload: options.preload === undefined ? false : options.preload,
    }
    this.value = `max-age=${optionsAll.maxAge}${
      optionsAll.includeSubDomains ? '; includeSubDomains' : ''
    }${optionsAll.preload ? '; preload' : ''}`
  }

  apply(c) {
    c.res.headers.set('Strict-Transport-Security', this.value)
  }
}
class NoSniffHandler {
  apply(c) {
    c.res.headers.set('X-Content-Type-Options', 'nosniff')
  }
}
class OriginAgentClusterDefaultHandler {
  apply(c) {
    c.res.headers.set('Origin-Agent-Cluster', '?1')
  }
}
class OriginAgentClusterHandler {
  constructor(options) {
    this.options = options
  }

  apply(c) {
    c.res.headers.set('Origin-Agent-Cluster', this.options)
  }
}
class DnsPrefetchControlDefaultHandler {
  apply(c) {
    c.res.headers.set('X-DNS-Prefetch-Control', 'off')
  }
}
class DnsPrefetchControlHandler {
  constructor(options) {
    if (options.allow) this.value = 'on'
    else this.value = 'off'
  }

  apply(c) {
    c.res.headers.set('X-DNS-Prefetch-Control', this.value)
  }
}
class IeNoOpenHandler {
  apply(c) {
    c.res.headers.set('X-Download-Options', 'noopen')
  }
}
class FrameguardDefaultHandler {
  apply(c) {
    c.res.headers.set('X-Frame-Options', 'SAMEORIGIN')
  }
}
class FrameguardHandler {
  constructor(options) {
    if (options.action === 'deny') this.value = 'DENY'
    else this.value = 'SAMEORIGIN'
  }

  apply(c) {
    c.res.headers.set('X-Frame-Options', this.value)
  }
}
class PermittedCrossDomainPoliciesDefaultHandler {
  apply(c) {
    c.res.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
  }
}
class PermittedCrossDomainPoliciesHandler {
  constructor(options) {
    this.options = options
  }

  apply(c) {
    c.res.headers.set(
      'X-Permitted-Cross-Domain-Policies',
      this.options.permittedPolicies,
    )
  }
}
class HidePoweredByHandler {
  apply(c) {
    c.res.headers.delete('X-Powered-By')
  }
}
class XssFilterHandler {
  apply(c) {
    c.res.headers.set('X-XSS-Protection', '0')
  }
}
class ReportToHandler {
  // rome-ignore lint/suspicious/noExplicitAny: I could not find Report-To JSON Info
  constructor(options) {
    this.value = options.map((v) => JSON.stringify(v)).join(',')
  }

  apply(c) {
    c.res.headers.set('Report-To', this.value)
  }
}
class ReportingEndpointsHandler {
  constructor(options) {
    let str = ''
    for (const property in options) str += `${property}="${options[property]}"`

    this.value = str
  }

  apply(c) {
    c.res.headers.set('Reporting-Endpoints', this.value)
  }
}
export function honoHelmet(options) {
  const handlers = []
  if (options === undefined) {
    handlers.push(new ContentSecurityPolicyDefaultHandler())
    handlers.push(new CrossOriginEmbedderPolicyDefaultHandler())
    handlers.push(new CrossOriginOpenerPolicyDefaultHandler())
    handlers.push(new CrossOriginResourcePolicyDefaultHandler())
    handlers.push(new ReferrerPolicyDefaultHandler())
    handlers.push(new HstsDefaultHandler())
    handlers.push(new NoSniffHandler())
    handlers.push(new OriginAgentClusterDefaultHandler())
    handlers.push(new DnsPrefetchControlDefaultHandler())
    handlers.push(new IeNoOpenHandler())
    handlers.push(new FrameguardDefaultHandler())
    handlers.push(new PermittedCrossDomainPoliciesDefaultHandler())
    handlers.push(new HidePoweredByHandler())
    handlers.push(new XssFilterHandler())
  } else {
    const {
      contentSecurityPolicy,
      crossOriginEmbedderPolicy,
      crossOriginOpenerPolicy,
      crossOriginResourcePolicy,
      referrerPolicy,
      hsts,
      noSniff,
      originAgentCluster,
      dnsPrefetchControl,
      ieNoOpen,
      frameguard,
      permittedCrossDomainPolicies,
      hidePoweredBy,
      xssFilter,
      reportingEndpoints,
      reportTo,
    } = options
    if (contentSecurityPolicy === undefined || contentSecurityPolicy === true)
      handlers.push(new ContentSecurityPolicyDefaultHandler())
    else if (contentSecurityPolicy !== false)
      handlers.push(new ContentSecurityPolicyHandler(contentSecurityPolicy))

    if (
      crossOriginEmbedderPolicy === undefined ||
      crossOriginEmbedderPolicy === true
    )
      handlers.push(new CrossOriginEmbedderPolicyDefaultHandler())
    else if (crossOriginEmbedderPolicy !== false)
      handlers.push(
        new CrossOriginEmbedderPolicyHandler(crossOriginEmbedderPolicy),
      )

    if (
      crossOriginOpenerPolicy === undefined ||
      crossOriginOpenerPolicy === true
    )
      handlers.push(new CrossOriginOpenerPolicyDefaultHandler())
    else if (crossOriginOpenerPolicy !== false)
      handlers.push(new CrossOriginOpenerPolicyHandler(crossOriginOpenerPolicy))

    if (
      crossOriginResourcePolicy === undefined ||
      crossOriginResourcePolicy === true
    )
      handlers.push(new CrossOriginResourcePolicyDefaultHandler())
    else if (crossOriginResourcePolicy !== false)
      handlers.push(
        new CrossOriginResourcePolicyHandler(crossOriginResourcePolicy),
      )

    if (referrerPolicy === undefined || referrerPolicy === true)
      handlers.push(new ReferrerPolicyDefaultHandler())
    else if (referrerPolicy !== false)
      handlers.push(new ReferrerPolicyHandler(referrerPolicy))

    if (hsts === undefined || hsts === true)
      handlers.push(new HstsDefaultHandler())
    else if (hsts !== false) handlers.push(new HstsHandler(hsts))

    if (noSniff === undefined || noSniff === true)
      handlers.push(new NoSniffHandler())

    if (originAgentCluster === undefined || originAgentCluster === true)
      handlers.push(new OriginAgentClusterDefaultHandler())
    else if (originAgentCluster !== false)
      handlers.push(new OriginAgentClusterHandler(originAgentCluster))

    if (dnsPrefetchControl === undefined || dnsPrefetchControl === true)
      handlers.push(new DnsPrefetchControlDefaultHandler())
    else if (dnsPrefetchControl !== false)
      handlers.push(new DnsPrefetchControlHandler(dnsPrefetchControl))

    if (ieNoOpen === undefined || ieNoOpen === true)
      handlers.push(new IeNoOpenHandler())

    if (frameguard === undefined || frameguard === true)
      handlers.push(new FrameguardDefaultHandler())
    else if (frameguard !== false)
      handlers.push(new FrameguardHandler(frameguard))

    if (
      permittedCrossDomainPolicies === undefined ||
      permittedCrossDomainPolicies === true
    )
      handlers.push(new PermittedCrossDomainPoliciesDefaultHandler())
    else if (permittedCrossDomainPolicies !== false)
      handlers.push(
        new PermittedCrossDomainPoliciesHandler(permittedCrossDomainPolicies),
      )

    if (hidePoweredBy === undefined || hidePoweredBy === true)
      handlers.push(new HidePoweredByHandler())

    if (xssFilter === undefined || xssFilter === true)
      handlers.push(new XssFilterHandler())

    if (reportingEndpoints)
      handlers.push(new ReportingEndpointsHandler(reportingEndpoints))

    if (reportTo) handlers.push(new ReportToHandler(reportTo))
  }
  return async (c, next) => {
    await next()

    handlers.forEach((handler) => handler.apply(c))
  }
}
