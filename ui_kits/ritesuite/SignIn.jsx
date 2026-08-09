const { Button, Input, FieldGroup, Checkbox, Eyebrow, Logo, Icon } = window.RiteDS;

function SignIn({ onSignIn }) {
  const [remember, setRemember] = React.useState(true);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', height: '100%', background: 'var(--surface-card)' }}>
      <div style={{ position: 'relative', background: 'var(--rite-deep-forest)', padding: '56px 56px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        <img src="../../assets/logo/rite-mark.png" alt="" style={{ position: 'absolute', right: -110, top: -90, width: 420, opacity: .12, pointerEvents: 'none' }} />
        <Logo on="dark" height={30} base="../../assets/logo/" />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 460 }}>
          <Eyebrow tone="mint">RiteSuite</Eyebrow>
          <h1 className="rite-underline" style={{ font: '700 42px/1.1 var(--font-sans)', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            So you can change the world.
          </h1>
          <p style={{ font: '400 16px/1.6 var(--font-sans)', color: 'var(--rite-sage)' }}>
            One console for every Rite product running against your Oracle ecosystem — conversions,
            bids, revenue, payroll and the analytics underneath them.
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 40 }}>
          {[['20', 'Years of Rite'], ['150', 'Deployments'], ['0', 'Failed go-lives']].map(([v, l]) => (
            <div key={l}>
              <div style={{ font: '700 30px/1 var(--font-sans)', letterSpacing: '-0.02em', color: '#FFFFFF' }}>{v}</div>
              <div style={{ font: '400 12px/1.3 var(--font-sans)', color: 'var(--rite-sage)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <form onSubmit={(e) => { e.preventDefault(); onSignIn(); }} style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h2 style={{ font: '600 24px/1.25 var(--font-sans)', letterSpacing: '-0.02em' }}>Sign in</h2>
            <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-tertiary)' }}>Use your Rite corporate account.</p>
          </div>
          <FieldGroup label="Work email" htmlFor="email">
            <Input id="email" type="email" defaultValue="rob.brown@rite.digital" icon="mail" />
          </FieldGroup>
          <FieldGroup label="Password" htmlFor="pw">
            <Input id="pw" type="password" defaultValue="••••••••••" icon="lock" />
          </FieldGroup>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox checked={remember} onChange={setRemember} label="Keep me signed in" />
            <a href="#" onClick={(e) => e.preventDefault()} style={{ font: '400 13px/1 var(--font-sans)' }}>Forgot password?</a>
          </div>
          <Button type="submit" fullWidth size="lg" onClick={onSignIn}>Sign in</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
            <span style={{ font: '400 12px/1 var(--font-sans)', color: 'var(--text-tertiary)' }}>or</span>
            <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          </div>
          <Button variant="secondary" fullWidth size="lg" icon="building-2" onClick={onSignIn}>Continue with Oracle SSO</Button>
          <p style={{ font: '400 12px/1.5 var(--font-sans)', color: 'var(--text-tertiary)', textAlign: 'center' }}>
            Trouble signing in? Contact <a href="#" onClick={(e) => e.preventDefault()}>hello@rite.digital</a>
          </p>
        </form>
      </div>
    </div>
  );
}

Object.assign(window, { SignIn });
